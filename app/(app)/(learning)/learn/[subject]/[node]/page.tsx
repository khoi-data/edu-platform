import { createClient } from "@/lib/supabase/server";
import { redirect, notFound } from "next/navigation";
import { LearnNodeClient } from "@/components/universal/LearnNodeClient";

export const dynamic = "force-dynamic";

interface LearnNodePageProps {
  params: Promise<{
    subject: string;
    node: string;
  }>;
}

export default async function LearnNodePage({ params }: LearnNodePageProps) {
  const { subject, node } = await params;
  const supabase = await createClient();
  const adminSupabase = supabase; // Use regular client to prevent Supabase module resolution errors in dev bundle

  const { data: { session } } = await supabase.auth.getSession();
  if (!session) redirect("/login");

  // 1. Fetch the Target Node — disambiguate by subject slug via 2-step query
  // Step 1a: Find the universal_subject ID for this subject slug
  const { data: universalSubject } = await adminSupabase
    .from("universal_subjects")
    .select("id")
    .eq("slug", subject)
    .maybeSingle();

  let sourceIds: string[] = [];
  if (universalSubject?.id) {
    // Step 1b: Find all content_sources for this subject
    const { data: sources } = await adminSupabase
      .from("content_sources")
      .select("id")
      .eq("subject_id", universalSubject.id);
    sourceIds = (sources ?? []).map((s: any) => s.id);
  }

  // Step 1c: Query the node, filtered by source if possible. If node parameter is UUID, check ID.
  const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(node);
  let nodeQuery = adminSupabase
    .from("curriculum_nodes")
    .select("id, title, slug, path, type, metadata, source_id, content_sources(slug)");
  
  if (isUuid) {
    nodeQuery = nodeQuery.eq("id", node);
  } else {
    nodeQuery = nodeQuery.eq("slug", node);
  }

  if (sourceIds.length > 0) {
    nodeQuery = nodeQuery.in("source_id", sourceIds);
  }

  const { data: nodeData, error: nodeError } = await nodeQuery.maybeSingle();

  if (nodeError || !nodeData) {
    console.error(`Node not found: subject=${subject}, node=${node}, sourceIds=${sourceIds}, error=`, nodeError);
    return notFound();
  }

  // 2. Fetch Breadcrumbs
  const pathSegments = nodeData.path ? nodeData.path.split('.') : [];
  const ancestorPaths = pathSegments.map((_seg: string, idx: number) => pathSegments.slice(0, idx + 1).join('.'));

  // Fetch titles for all nodes in the path
  const { data: bcNodes } = await adminSupabase
    .from("curriculum_nodes")
    .select("title, slug, path")
    .eq("source_id", nodeData.source_id)
    .in("path", ancestorPaths)
    .order("depth", { ascending: true });

  const breadcrumbs = bcNodes || [];

  // 3. Find associated concept
  const { data: lc } = await supabase
    .from("lesson_concepts")
    .select("concept_id")
    .eq("lesson_id", nodeData.id)
    .maybeSingle();
  
  const conceptId = lc?.concept_id || (nodeData.metadata as any)?.concept_id;

  // Exercise sets and questions are now fetched client-side via Assessment Engine

  // 5. Fetch Child Nodes & Student Progress
  let childNodes: any[] = [];

  const [descendantsRes, eventsRes, sessionsRes, statsRes] = await Promise.all([
    nodeData.type !== 'lesson'
      ? adminSupabase
          .from("curriculum_nodes")
          .select(`id, title, slug, type, parent_id, sort_key, metadata`)
          .eq("source_id", nodeData.source_id)
          .neq("type", "course")
      : adminSupabase
          .from("curriculum_nodes")
          .select(`id, title, slug, type, parent_id, sort_key, metadata`)
          .eq("source_id", nodeData.source_id)
          .eq("type", "lesson")
          .order("sort_key", { ascending: true }),
    supabase
      .from("learning_events")
      .select("event_type, metadata, created_at")
      .eq("user_id", session.user.id)
      .eq("subject_slug", subject)
      .in("event_type", ["lesson_visited", "lesson_completed"])
      .order("created_at", { ascending: false })
      .limit(100),
    supabase
      .from("learning_sessions")
      .select("summary_metrics, started_at")
      .eq("user_id", session.user.id)
      .eq("subject_slug", subject)
      .order("started_at", { ascending: false })
      .limit(100),
    supabase
      .from("user_dashboard_stats")
      .select("subject_progress")
      .eq("user_id", session.user.id)
      .maybeSingle()
  ]);

  if (nodeData.type !== 'lesson') {
    const allDescendants = descendantsRes.data;
    if (allDescendants) {
      const units = allDescendants.filter((n: any) => n.type === 'unit').sort((a: any, b: any) => (a.sort_key || 0) - (b.sort_key || 0));
      const lessons = allDescendants.filter((n: any) => n.type === 'lesson' || n.type === 'exam').sort((a: any, b: any) => (a.sort_key || 0) - (b.sort_key || 0));
      
      // Interleave units and lessons/exams
      units.forEach((u: any) => {
        childNodes.push(u);
        const uLessons = lessons.filter((l: any) => l.parent_id === u.id);
        childNodes.push(...uLessons);
      });
    }
  } else {
    childNodes = descendantsRes.data || [];
  }

  // Derive initialCompletedNodes and initialLastLesson
  const completedSlugSet = new Set<string>();
  (eventsRes.data || []).forEach((e: any) => {
    if (e.metadata?.slug) completedSlugSet.add(e.metadata.slug);
    else if (e.metadata?.url) {
      const parts = e.metadata.url.split('/');
      const lastPart = parts[parts.length - 1];
      if (lastPart && lastPart.startsWith('bai-')) completedSlugSet.add(lastPart);
    }
  });

  (sessionsRes.data || []).forEach((s: any) => {
    const metrics = s.summary_metrics as any;
    if (metrics) {
      if (metrics.lesson_slug) completedSlugSet.add(metrics.lesson_slug);
      if (metrics.unit_topic && typeof metrics.unit_topic === 'string') {
        const match = metrics.unit_topic.match(/Bài\s*(\d+)/i);
        if (match) completedSlugSet.add(`bai-${match[1]}`);
      }
    }
  });

  const lastLessonObj = (statsRes.data?.subject_progress as any)?.[subject]?.last_lesson || null;
  const initialLastLessonSlug = lastLessonObj?.slug || (lastLessonObj?.url ? lastLessonObj.url.split('/').pop() : null);
  const initialCompletedNodes = Array.from(completedSlugSet);

  // Questions are fetched dynamically via Assessment Engine on the client side

  // Intercept Unit 3 (Hobbies) to show the new Textbook aligned side-by-side view
  const unit3InitialPages: Record<string, number> = {
    "unit-8": 34,
    "unit-9": 36,
    "unit-10": 38,
    "unit-11": 41
  };

  if (unit3InitialPages[node] !== undefined) {
    const Unit3TextbookClient = (await import("@/components/learning/Unit3TextbookClient")).default;
    return (
      <Unit3TextbookClient 
        initialPage={unit3InitialPages[node]}
        backUrl={`/hoc-tap/${subject}`}
        subjectSlug={subject}
      />
    );
  }

  // Intercept Unit 4 (Travel)
  const unit4InitialPages: Record<string, number> = {
    "unit-12": 48,
    "unit-13": 50,
    "unit-14": 53,
    "unit-15": 55
  };

  if (unit4InitialPages[node] !== undefined) {
    const GenericTextbookClient = (await import("@/components/learning/GenericTextbookClient")).default;
    const { unit4Pages } = await import("@/lib/data/unit4Data");
    return (
      <GenericTextbookClient
        pages={unit4Pages}
        initialPage={unit4InitialPages[node]}
        backUrl={`/hoc-tap/${subject}`}
        subjectSlug={subject}
        unitTitle="Unit 4: Travel and Holidays"
      />
    );
  }

  // Intercept Unit 5 (Food)
  const unit5InitialPages: Record<string, number> = {
    "unit-16": 60,
    "unit-17": 64,
    "unit-18": 67
  };

  if (unit5InitialPages[node] !== undefined) {
    const GenericTextbookClient = (await import("@/components/learning/GenericTextbookClient")).default;
    const { unit5Pages } = await import("@/lib/data/unit5Data");
    return (
      <GenericTextbookClient
        pages={unit5Pages}
        initialPage={unit5InitialPages[node]}
        backUrl={`/hoc-tap/${subject}`}
        subjectSlug={subject}
        unitTitle="Unit 5: Food"
      />
    );
  }

  // Intercept Unit 6 (Transport)
  const unit6InitialPages: Record<string, number> = {
    "unit-19": 72,
    "unit-20": 75,
    "unit-21": 78
  };

  if (unit6InitialPages[node] !== undefined) {
    const GenericTextbookClient = (await import("@/components/learning/GenericTextbookClient")).default;
    const { unit6Pages } = await import("@/lib/data/unit6Data");
    return (
      <GenericTextbookClient
        pages={unit6Pages}
        initialPage={unit6InitialPages[node]}
        backUrl={`/hoc-tap/${subject}`}
        subjectSlug={subject}
        unitTitle="Unit 6: Transport"
      />
    );
  }

  // Intercept Unit 7 (Jobs, Work and Study)
  const unit7InitialPages: Record<string, number> = {
    "unit-22": 82,
    "unit-23": 83,
    "unit-24": 85,
    "unit-25": 88
  };

  if (unit7InitialPages[node] !== undefined) {
    const GenericTextbookClient = (await import("@/components/learning/GenericTextbookClient")).default;
    const { unit7Pages } = await import("@/lib/data/unit7Data");
    return (
      <GenericTextbookClient
        pages={unit7Pages}
        initialPage={unit7InitialPages[node]}
        backUrl={`/hoc-tap/${subject}`}
        subjectSlug={subject}
        unitTitle="Unit 7: Jobs, Work and Study"
      />
    );
  }

  // Intercept Unit 8 (Health and Medicine)
  const unit8InitialPages: Record<string, number> = {
    "unit-26": 93,
    "unit-27": 95,
    "unit-28": 97
  };

  if (unit8InitialPages[node] !== undefined) {
    const GenericTextbookClient = (await import("@/components/learning/GenericTextbookClient")).default;
    const { unit8Pages } = await import("@/lib/data/unit8Data");
    return (
      <GenericTextbookClient
        pages={unit8Pages}
        initialPage={unit8InitialPages[node]}
        backUrl={`/hoc-tap/${subject}`}
        subjectSlug={subject}
        unitTitle="Unit 8: Health and Medicine"
      />
    );
  }

  // Intercept Unit 9 (Language)
  const unit9InitialPages: Record<string, number> = {
    "unit-29": 104,
    "unit-30": 108,
    "unit-31": 110
  };

  if (unit9InitialPages[node] !== undefined) {
    const GenericTextbookClient = (await import("@/components/learning/GenericTextbookClient")).default;
    const { unit9Pages } = await import("@/lib/data/unit9Data");
    return (
      <GenericTextbookClient
        pages={unit9Pages}
        initialPage={unit9InitialPages[node]}
        backUrl={`/hoc-tap/${subject}`}
        subjectSlug={subject}
        unitTitle="Unit 9: Language"
      />
    );
  }

  // Intercept Unit 10 (Science and Technology)
  const unit10InitialPages: Record<string, number> = {
    "unit-32": 115,
    "unit-33": 118,
    "unit-34": 121,
    "unit-35": 120
  };

  if (unit10InitialPages[node] !== undefined) {
    const GenericTextbookClient = (await import("@/components/learning/GenericTextbookClient")).default;
    const { unit10Pages } = await import("@/lib/data/unit10Data");
    return (
      <GenericTextbookClient
        pages={unit10Pages}
        initialPage={unit10InitialPages[node]}
        backUrl={`/hoc-tap/${subject}`}
        subjectSlug={subject}
        unitTitle="Unit 10: Science and Technology"
      />
    );
  }



  return (
    <main className="min-h-screen bg-surface p-4 md:p-8 lg:p-12">
      <LearnNodeClient 
        node={nodeData as any}
        breadcrumbs={breadcrumbs as any}
        subjectSlug={subject}
        conceptId={conceptId}
        childNodes={childNodes}
        initialCompletedNodes={initialCompletedNodes}
        initialLastLessonSlug={initialLastLessonSlug}
      />
    </main>
  );
}
