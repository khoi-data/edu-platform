import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import { ArrowLeft, BookOpen, ScrollText } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import VideoPlayer from "../../practical-english/[lessonSlug]/VideoPlayer";

interface PageProps {
  params: Promise<{
    lessonSlug: string;
  }>;
}

export default async function ToeicThayLongLessonPage({ params }: PageProps) {
  const { lessonSlug } = await params;
  
  const dataPath = path.resolve(process.cwd(), "content/toeic-thay-long-lessons.json");
  let lessons = [];
  try {
    const fileContents = fs.readFileSync(dataPath, "utf8");
    lessons = JSON.parse(fileContents);
  } catch (error) {
    console.error("Error reading lessons:", error);
  }

  const lesson = lessons.find((l: any) => l.slug === lessonSlug);

  if (!lesson) {
    notFound();
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  let isCompleted = false;
  if (user) {
    const { data: session } = await supabase
      .from("learning_sessions")
      .select("id")
      .eq("user_id", user.id)
      .eq("subject_slug", "toeic-thay-long")
      .contains("summary_metrics", { unit_topic: lesson.title, sub_type: "video_lesson" })
      .maybeSingle();
      
    if (session) {
      isCompleted = true;
    }
  }

  async function markAsCompleted() {
    "use server";
    const sb = await createClient();
    const { data: { user: u } } = await sb.auth.getUser();
    if (!u) return;
    
    const { data: existing } = await sb.from("learning_sessions")
      .select("id")
      .eq("user_id", u.id)
      .eq("subject_slug", "toeic-thay-long")
      .contains("summary_metrics", { unit_topic: lesson.title, sub_type: "video_lesson" })
      .maybeSingle();
      
    if (!existing) {
      const { error } = await sb.from("learning_sessions").insert({
        user_id: u.id,
        subject_slug: "toeic-thay-long",
        summary_metrics: {
          type: "exam",
          sub_type: "video_lesson",
          unit_topic: lesson.title,
          score: 1,
          total: 1
        }
      });
      if (error) console.error("INSERT ERROR:", error);
    }
    
    const { revalidatePath } = await import("next/cache");
    revalidatePath(`/hoc-tap/toeic-thay-long`);
    revalidatePath(`/hoc-tap/toeic-thay-long/${lessonSlug}`);
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-surface text-white pb-20">
      <div className="mx-auto max-w-4xl w-full px-6 py-8">
        <Link
          href="/hoc-tap/toeic-thay-long"
          className="inline-flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-sky-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Danh sách bài học
        </Link>

        <header className="mb-8 border-b border-line/80 pb-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-white">
                {lesson.title}
              </h1>
              <p className="mt-2 text-slate-400">
                {lesson.description}
              </p>
            </div>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Video Section */}
          <div className="w-full lg:w-1/2 sticky top-6">
            <VideoPlayer 
              lessonTitle={lesson.title}
              videoUrl={lesson.videoUrl}
              aspectRatio={lesson.aspectRatio || "video"}
              isCompleted={isCompleted}
              onCompleteAction={markAsCompleted}
            />
          </div>

          {/* Info Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            {lesson.vocabulary && lesson.vocabulary.length > 0 && (
              <details className="group border border-slate-700/50 rounded-xl bg-slate-900 overflow-hidden [&_summary::-webkit-details-marker]:hidden" open>
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-white hover:bg-slate-800 transition-colors">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-sky-400" />
                    <h2 className="text-lg font-bold">Từ vựng & Mẫu câu</h2>
                  </div>
                  <span className="relative size-5 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </summary>
                <div className="p-4 pt-0 border-t border-slate-800">
                  <div className="mt-4 grid gap-3">
                    {lesson.vocabulary.map((vocab: any, idx: number) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-2 bg-slate-800/50 p-3 rounded-lg">
                        <strong className="text-sky-300 font-bold min-w-32">{vocab.word}</strong>
                        <span className="text-slate-300">{vocab.meaning}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            )}

            {lesson.script && (
              <details className="group border border-slate-700/50 rounded-xl bg-slate-900 overflow-hidden [&_summary::-webkit-details-marker]:hidden" open>
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-white hover:bg-slate-800 transition-colors">
                  <div className="flex items-center gap-3">
                    <ScrollText className="w-5 h-5 text-emerald-400" />
                    <h2 className="text-lg font-bold">Script / Kịch bản</h2>
                  </div>
                  <span className="relative size-5 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </summary>
                <div className="p-4 pt-0 border-t border-slate-800">
                  <div className="mt-4 flex flex-col gap-4 p-4 bg-slate-950 rounded-lg border border-slate-800 shadow-inner">
                  {Array.isArray(lesson.script) ? lesson.script.map((line: any, idx: number) => (
                    <div key={idx} className="flex flex-col gap-1 border-b border-slate-800/50 pb-3 last:border-0 last:pb-0">
                      <p className="text-slate-200 font-medium text-sm md:text-base leading-relaxed">
                        {line.en}
                      </p>
                      {line.vi && (
                        <p className="text-sky-300/80 text-sm italic">
                          {line.vi}
                        </p>
                      )}
                    </div>
                  )) : (
                    <div className="text-slate-300 whitespace-pre-line leading-relaxed font-medium text-sm md:text-base">
                      {lesson.script}
                    </div>
                  )}
                </div>
                </div>
              </details>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
