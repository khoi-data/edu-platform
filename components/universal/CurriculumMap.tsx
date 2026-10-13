"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Play,
  BookOpen,
  Video,
  Sparkles,
  ChevronDown,
  ChevronRight,
  Search,
  LayoutGrid,
  ListOrdered,
  ArrowRight,
  Layers,
  Award,
  Compass,
  Check
} from "lucide-react";

export interface PathNode {
  id: string;
  title: string;
  slug: string;
  type: string;
  parent_id?: string;
  sort_key?: number;
  metadata?: {
    page?: number;
    volume?: number;
    topic_label?: string;
    videos?: Array<{ youtube_id: string; subtitle: string; title?: string }>;
    youtube_id?: string;
    practice?: any[];
  };
}

interface CurriculumMapProps {
  nodes: PathNode[];
  subjectSlug: string;
  completedNodes?: string[];
  lastVisitedSlug?: string;
  onToggleComplete?: (slug: string, isCompleted: boolean) => void;
}

export function CurriculumMap({
  nodes,
  subjectSlug,
  completedNodes = [],
  lastVisitedSlug,
  onToggleComplete
}: CurriculumMapProps) {
  const [selectedVolume, setSelectedVolume] = useState<number | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [collapsedUnits, setCollapsedUnits] = useState<Record<string, boolean>>({});

  // 1. Calculate lesson indexes
  const { lessonIndexes, totalLessons } = useMemo(() => {
    const indexes: Record<string, number> = {};
    let count = 0;
    nodes.forEach((node) => {
      if (node.type === "lesson") {
        count++;
        indexes[node.id] = count;
      }
    });
    return { lessonIndexes: indexes, totalLessons: count };
  }, [nodes]);

  // 2. Group nodes by Unit
  const groups = useMemo(() => {
    const result: { unit: PathNode; items: PathNode[]; volume: number }[] = [];
    let currentGroup: { unit: PathNode; items: PathNode[]; volume: number } | null = null;

    nodes.forEach((node) => {
      if (node.type === "unit") {
        const vol = node.metadata?.volume || (node.sort_key && node.sort_key > 7 ? 2 : 1);
        currentGroup = { unit: node, items: [], volume: vol };
        result.push(currentGroup);
      } else {
        if (currentGroup) {
          currentGroup.items.push(node);
          if (node.metadata?.volume && !currentGroup.unit.metadata?.volume) {
            currentGroup.volume = node.metadata.volume;
          }
        } else {
          currentGroup = {
            unit: {
              id: "start-unit",
              title: "Khởi động & Kiến thức nền",
              slug: "start",
              type: "unit",
              metadata: { volume: 1 }
            },
            items: [node],
            volume: 1
          };
          result.push(currentGroup);
        }
      }
    });

    return result;
  }, [nodes]);

  // 3. Filter groups based on selected volume and search query
  const filteredGroups = useMemo(() => {
    return groups
      .map((group) => {
        // Filter by volume
        if (selectedVolume !== "all") {
          const groupVol = group.volume || (group.unit.sort_key && group.unit.sort_key > 7 ? 2 : 1);
          if (groupVol !== selectedVolume) {
            return null;
          }
        }

        // Filter by search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchUnit = group.unit.title.toLowerCase().includes(q);
          const matchedItems = group.items.filter(
            (item) =>
              item.title.toLowerCase().includes(q) ||
              item.slug.toLowerCase().includes(q) ||
              String(lessonIndexes[item.id] || "").includes(q)
          );

          if (!matchUnit && matchedItems.length === 0) {
            return null;
          }

          return {
            ...group,
            items: matchUnit ? group.items : matchedItems
          };
        }

        return group;
      })
      .filter((g): g is NonNullable<typeof g> => g !== null);
  }, [groups, selectedVolume, searchQuery, lessonIndexes]);

  const toggleUnit = (unitId: string) => {
    setCollapsedUnits((prev) => ({
      ...prev,
      [unitId]: !prev[unitId]
    }));
  };

  // 4. Global statistics
  const completedCount = useMemo(() => {
    return nodes.filter((n) => n.type === "lesson" && completedNodes.includes(n.slug)).length;
  }, [nodes, completedNodes]);

  const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  // 5. Determine active / target lesson to resume learning
  const targetLesson = useMemo(() => {
    const allLessonNodes = nodes.filter((n) => n.type === "lesson");
    if (allLessonNodes.length === 0) return null;

    // A. If lastVisitedSlug is provided and is NOT yet completed, resume that one
    if (lastVisitedSlug) {
      const last = allLessonNodes.find((n) => n.slug === lastVisitedSlug);
      if (last && !completedNodes.includes(last.slug)) {
        return last;
      }
    }

    // B. Otherwise, first uncompleted lesson in sequential order
    const nextUncompleted = allLessonNodes.find((n) => !completedNodes.includes(n.slug));
    if (nextUncompleted) return nextUncompleted;

    // C. If all completed, return null
    return null;
  }, [nodes, completedNodes, lastVisitedSlug]);

  const targetLessonGroup = useMemo(() => {
    if (!targetLesson) return null;
    return groups.find((g) => g.items.some((item) => item.slug === targetLesson.slug)) || null;
  }, [groups, targetLesson]);

  // Smooth scroll to specific lesson card
  const scrollToLesson = (slug: string, volume?: number, unitId?: string) => {
    if (unitId) {
      setCollapsedUnits((prev) => ({ ...prev, [unitId]: false }));
    }
    if (volume && selectedVolume !== "all" && selectedVolume !== volume) {
      setSelectedVolume(volume);
    }
    setTimeout(() => {
      const el = document.getElementById(`lesson-${slug}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("ring-4", "ring-cyan-400", "scale-[1.02]", "transition-all", "duration-500");
        setTimeout(() => {
          el.classList.remove("ring-4", "ring-cyan-400", "scale-[1.02]");
        }, 2500);
      }
    }, 120);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 select-none">
      {/* ── TOP STATS & CONTROLS DASHBOARD ───────────────────────────── */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 via-slate-950/90 to-[#070b14] p-6 shadow-2xl backdrop-blur-xl">
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Left: Overall Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-400">
                <Sparkles size={13} />
                Lộ Trình Học Tập Hiện Đại
              </span>
              <span className="rounded-full border border-slate-700 bg-slate-800/60 px-2.5 py-0.5 text-xs font-semibold text-slate-300">
                Kết Nối Tri Thức
              </span>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
              Chương Trình Toán Lớp 3
            </h2>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Toàn bộ bài giảng video chính thức từ Cô Nguyễn Thị Điềm (VietJack) kèm đánh dấu tiến độ học tập thông minh.
            </p>
          </div>

          {/* Right: Progress Card */}
          <div className="flex flex-col items-start md:items-end justify-center rounded-2xl border border-slate-800 bg-slate-900/80 p-4 min-w-[240px] shadow-lg">
            <div className="flex items-center justify-between w-full mb-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tiến độ hoàn thành</span>
              <span className="text-sm font-black text-cyan-400">{progressPercent}%</span>
            </div>
            {/* Progress Bar */}
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 transition-all duration-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="flex items-center justify-between w-full mt-2 text-[11px] text-slate-400">
              <span>Đã hoàn thành: <strong className="text-white">{completedCount}</strong>/{totalLessons} bài</span>
              <span>16 Chủ đề</span>
            </div>
          </div>
        </div>

        {/* ── FILTER TABS & SEARCH BAR ─────────────────────────────────── */}
        <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Volume Tabs */}
          <div className="inline-flex rounded-2xl bg-slate-950/80 p-1 border border-slate-800">
            <button
              onClick={() => setSelectedVolume("all")}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                selectedVolume === "all"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Tất cả (81 bài)
            </button>
            <button
              onClick={() => setSelectedVolume(1)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                selectedVolume === 1
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Tập 1 (Bài 1–44)
            </button>
            <button
              onClick={() => setSelectedVolume(2)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                selectedVolume === 2
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Tập 2 (Bài 45–81)
            </button>
          </div>

          {/* Search Input & View Toggle */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1 sm:w-64">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Tìm bài học..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-slate-800 bg-slate-950/80 py-2 pl-9 pr-4 text-xs text-slate-200 placeholder-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-500 hover:text-slate-300"
                >
                  ✕
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="inline-flex rounded-xl bg-slate-950/80 p-1 border border-slate-800">
              <button
                onClick={() => setViewMode("list")}
                title="Dạng danh sách / timeline"
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === "list" ? "bg-slate-800 text-cyan-400" : "text-slate-500 hover:text-slate-300"
                }`}
              >
                <ListOrdered size={16} />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                title="Dạng lưới thẻ"
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === "grid" ? "bg-slate-800 text-cyan-400" : "text-slate-500 hover:text-slate-300"
                }`}
              >
                <LayoutGrid size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── HERO RESUME LEARNING / TIẾP TỤC HỌC TẬP CARD ──────────────── */}
      {targetLesson ? (
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/40 bg-gradient-to-r from-cyan-950/40 via-slate-900/95 to-blue-950/40 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
          <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-cyan-400">
                  {completedCount === 0 ? "Bắt đầu bài đầu tiên" : "Vị trí học tập hiện tại • Tiếp tục bài học"}
                </span>
                <span className="rounded-md border border-slate-700 bg-slate-800/80 px-2 py-0.5 text-[10px] font-bold text-slate-300">
                  {targetLesson.metadata?.volume === 2 ? "Tập 2 • HK2" : "Tập 1 • HK1"}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {targetLesson.title}
                </h3>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400 flex-wrap">
                {targetLesson.metadata?.page && (
                  <span className="rounded-md border border-slate-800 bg-slate-950/80 px-2.5 py-1 text-[11px] font-semibold text-slate-300">
                    📖 SGK Trang {targetLesson.metadata.page}
                  </span>
                )}
                <span className="rounded-md border border-sky-500/20 bg-sky-500/10 px-2.5 py-1 text-[11px] font-bold text-sky-400 flex items-center gap-1">
                  <Video size={12} />
                  {targetLesson.metadata?.videos?.length || (targetLesson.metadata?.youtube_id ? 1 : 0)} Video cô Điềm
                </span>
                {targetLessonGroup?.unit?.title && (
                  <span className="text-slate-500 text-[11px]">
                    Thuộc: {targetLessonGroup.unit.title}
                  </span>
                )}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3 shrink-0 flex-wrap sm:flex-nowrap">
              <button
                onClick={() =>
                  scrollToLesson(
                    targetLesson.slug,
                    targetLesson.metadata?.volume || targetLessonGroup?.volume || 1,
                    targetLessonGroup?.unit?.id
                  )
                }
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-2xl border border-slate-700 hover:border-cyan-500/50 bg-slate-900/90 hover:bg-slate-800 text-xs font-bold text-slate-200 transition-all shadow-md active:scale-95"
              >
                <span>Định vị trên sơ đồ</span>
                <span className="text-cyan-400 font-bold">📍</span>
              </button>

              <Link
                href={`/learn/${subjectSlug}/${targetLesson.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-sm shadow-xl shadow-cyan-500/30 transition-all active:scale-95 hover:shadow-cyan-400/40"
              >
                <span>{completedCount === 0 ? "Bắt đầu học ngay" : "Tiếp tục học ngay"}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      ) : completedCount > 0 && completedCount === totalLessons ? (
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/40 bg-gradient-to-r from-emerald-950/40 via-slate-900/90 to-teal-950/40 p-6 shadow-2xl backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/40 bg-emerald-500/20 text-emerald-300 shadow-inner">
              <Award size={32} />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                Xuất Sắc! Hoàn Thành Chương Trình
              </span>
              <h3 className="text-xl font-black text-white mt-0.5">
                Em đã hoàn thành trọn vẹn cả 81 bài học Toán lớp 3!
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Hãy thường xuyên ôn lại các bài kiểm tra và làm đề thi để củng cố kiến thức vững chắc nhé!
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              if (nodes[0]?.slug) {
                scrollToLesson(nodes[0].slug, 1, groups[0]?.unit?.id);
              }
            }}
            className="px-5 py-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 font-bold text-xs hover:bg-emerald-500 hover:text-white transition shrink-0"
          >
            Ôn lại từ Bài 1 ↺
          </button>
        </div>
      ) : null}

      {/* ── CHAPTERS / UNITS LIST ────────────────────────────────────── */}
      <div className="space-y-6">
        {filteredGroups.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-800 p-12 text-center text-slate-500">
            <BookOpen size={32} className="mx-auto mb-3 opacity-40 text-cyan-400" />
            <p className="font-semibold text-sm">Không tìm thấy bài học nào phù hợp.</p>
            <p className="text-xs text-slate-600 mt-1">Vui lòng thử tìm kiếm với từ khóa khác.</p>
          </div>
        ) : (
          filteredGroups.map((group) => {
            const isCollapsed = !!collapsedUnits[group.unit.id];
            const groupLessons = group.items.filter((item) => item.type === "lesson");
            const groupCompleted = groupLessons.filter((item) => completedNodes.includes(item.slug)).length;
            const isAllCompleted = groupLessons.length > 0 && groupCompleted === groupLessons.length;
            const totalVideosInGroup = groupLessons.reduce(
              (acc, item) => acc + (item.metadata?.videos?.length || (item.metadata?.youtube_id ? 1 : 0)),
              0
            );

            const isTap2 = group.volume === 2 || (group.unit.sort_key && group.unit.sort_key > 7);

            return (
              <div
                key={group.unit.id}
                className="overflow-hidden rounded-3xl border border-slate-800/90 bg-gradient-to-b from-slate-900/60 to-slate-950/80 shadow-xl backdrop-blur-md transition-all hover:border-slate-700/80"
              >
                {/* ── CHAPTER HEADER ────────────────────────────────────── */}
                <div
                  onClick={() => toggleUnit(group.unit.id)}
                  className="flex cursor-pointer items-center justify-between p-5 sm:p-6 transition-colors hover:bg-white/[0.02]"
                >
                  <div className="flex items-center gap-4">
                    {/* Chapter Icon Badge */}
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${
                        isAllCompleted
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                          : isTap2
                          ? "border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-400"
                          : "border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
                      } shadow-inner`}
                    >
                      {isAllCompleted ? (
                        <CheckCircle2 size={24} />
                      ) : (
                        <Layers size={22} />
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`rounded-md px-2 py-0.5 text-[10px] font-black uppercase tracking-wider border ${
                            isTap2
                              ? "border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-400"
                              : "border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
                          }`}
                        >
                          {isTap2 ? "Tập 2 • HK2" : "Tập 1 • HK1"}
                        </span>
                        <span className="text-xs font-bold text-slate-400">
                          {groupLessons.length} bài học • {totalVideosInGroup} video bài giảng
                        </span>
                      </div>
                      <h3 className="mt-1 text-base sm:text-lg font-black tracking-tight text-white">
                        {group.unit.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right Header Status */}
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex flex-col items-end">
                      <span className="text-xs font-bold text-slate-300">
                        {groupCompleted}/{groupLessons.length} hoàn thành
                      </span>
                      <div className="mt-1 h-1.5 w-24 overflow-hidden rounded-full bg-slate-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300"
                          style={{
                            width: `${groupLessons.length > 0 ? (groupCompleted / groupLessons.length) * 100 : 0}%`
                          }}
                        />
                      </div>
                    </div>

                    <button
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 hover:text-white transition-colors"
                      aria-label="Toggle Unit"
                    >
                      {isCollapsed ? <ChevronDown size={18} /> : <ChevronRight size={18} className="rotate-90" />}
                    </button>
                  </div>
                </div>

                {/* ── CHAPTER CONTENT (LESSONS) ─────────────────────────── */}
                {!isCollapsed && (
                  <div className="border-t border-slate-800/80 p-5 sm:p-6 bg-slate-950/40">
                    {viewMode === "list" ? (
                      /* ── TIMELINE LIST VIEW ─────────────────────────── */
                      <div className="relative pl-6 space-y-4 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-800">
                        {group.items.map((item, idx) => {
                          const isCompleted = completedNodes.includes(item.slug);
                          const isCurrent = targetLesson?.slug === item.slug;
                          const lessonIndex = lessonIndexes[item.id] || idx + 1;
                          const videosCount = item.metadata?.videos?.length || (item.metadata?.youtube_id ? 1 : 0);
                          const page = item.metadata?.page;

                          return (
                            <div key={item.id} className="relative group">
                              {/* Step Node Marker on timeline */}
                              <div
                                className={`absolute -left-6 top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all ${
                                  isCurrent
                                    ? "border-cyan-400 bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,1)]"
                                    : isCompleted
                                    ? "border-emerald-400 bg-emerald-500 text-white shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                                    : "border-slate-700 bg-slate-900 text-slate-400 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300"
                                }`}
                              >
                                {isCurrent ? (
                                  <>
                                    <span className="absolute -inset-1 rounded-full bg-cyan-400 opacity-75 animate-ping" />
                                    <Play size={10} className="fill-current translate-x-0.5 relative z-10" />
                                  </>
                                ) : isCompleted ? (
                                  <CheckCircle2 size={12} className="stroke-[3]" />
                                ) : (
                                  <span className="text-[10px] font-black">{lessonIndex}</span>
                                )}
                              </div>

                              {/* Lesson Row Card */}
                              <div
                                id={`lesson-${item.slug}`}
                                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border p-4 transition-all duration-200 ${
                                  isCurrent
                                    ? "ring-2 ring-cyan-400 border-cyan-400 bg-gradient-to-r from-cyan-950/50 via-slate-900 to-slate-900/95 shadow-[0_0_25px_rgba(6,182,212,0.25)]"
                                    : isCompleted
                                    ? "border-emerald-500/20 bg-emerald-950/10 hover:border-emerald-500/40 hover:bg-emerald-950/20"
                                    : "border-slate-800/80 bg-slate-900/60 hover:border-cyan-500/40 hover:bg-slate-900/90 hover:shadow-[0_4px_20px_rgba(6,182,212,0.1)]"
                                }`}
                              >
                                <div className="space-y-1.5 flex-1 min-w-0">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-xs font-black text-cyan-400 font-mono">
                                      #{lessonIndex < 10 ? `0${lessonIndex}` : lessonIndex}
                                    </span>
                                    {page && (
                                      <span className="rounded-md border border-slate-800 bg-slate-950/80 px-2 py-0.5 text-[10px] font-semibold text-slate-400">
                                        📖 SGK Trang {page}
                                      </span>
                                    )}
                                    {videosCount > 0 && (
                                      <span className="rounded-md border border-sky-500/20 bg-sky-500/10 px-2 py-0.5 text-[10px] font-bold text-sky-400 flex items-center gap-1">
                                        <Video size={10} />
                                        {videosCount} Video bài giảng
                                      </span>
                                    )}
                                    {isCurrent && (
                                      <span className="rounded-md border border-cyan-400/50 bg-cyan-500/20 px-2 py-0.5 text-[10px] font-black text-cyan-300 flex items-center gap-1 animate-pulse">
                                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                                        📍 Đang học • Bài tiếp theo
                                      </span>
                                    )}
                                    {isCompleted && (
                                      <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                                        <CheckCircle2 size={10} />
                                        ✓ Đã hoàn thành
                                      </span>
                                    )}
                                  </div>

                                  <Link
                                    href={`/learn/${subjectSlug}/${item.slug}`}
                                    className="block text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors truncate"
                                  >
                                    {item.title}
                                  </Link>
                                </div>

                                {/* Right Action Buttons */}
                                <div className="flex items-center gap-2.5 shrink-0">
                                  {onToggleComplete && (
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        onToggleComplete(item.slug, !isCompleted);
                                      }}
                                      title={isCompleted ? "Bỏ đánh dấu hoàn thành" : "Đánh dấu đã học bài này"}
                                      className={`p-2 rounded-xl border transition-all ${
                                        isCompleted
                                          ? "border-emerald-500/40 bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/30"
                                          : "border-slate-800 bg-slate-900/60 text-slate-500 hover:text-emerald-400 hover:border-emerald-500/30"
                                      }`}
                                    >
                                      <CheckCircle2 size={16} />
                                    </button>
                                  )}

                                  <Link
                                    href={`/learn/${subjectSlug}/${item.slug}`}
                                    className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                                      isCurrent
                                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:from-cyan-400 hover:to-blue-500"
                                        : isCompleted
                                        ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500 hover:text-white"
                                        : "border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                                    }`}
                                  >
                                    <span>{isCurrent ? "Học ngay" : isCompleted ? "Ôn lại" : "Học ngay"}</span>
                                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      /* ── MODERN GRID VIEW ───────────────────────────── */
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {group.items.map((item, idx) => {
                          const isCompleted = completedNodes.includes(item.slug);
                          const isCurrent = targetLesson?.slug === item.slug;
                          const lessonIndex = lessonIndexes[item.id] || idx + 1;
                          const videosCount = item.metadata?.videos?.length || (item.metadata?.youtube_id ? 1 : 0);
                          const page = item.metadata?.page;

                          return (
                            <div
                              key={item.id}
                              id={`lesson-${item.slug}`}
                              className={`group relative flex flex-col justify-between rounded-2xl border p-4 transition-all duration-200 ${
                                isCurrent
                                  ? "ring-2 ring-cyan-400 border-cyan-400 bg-gradient-to-r from-cyan-950/50 via-slate-900 to-slate-900/95 shadow-[0_0_25px_rgba(6,182,212,0.25)]"
                                  : isCompleted
                                  ? "border-emerald-500/20 bg-emerald-950/10 hover:border-emerald-500/40 hover:bg-emerald-950/20"
                                  : "border-slate-800/80 bg-slate-900/60 hover:border-cyan-500/40 hover:bg-slate-900/90 hover:shadow-[0_4px_20px_rgba(6,182,212,0.1)]"
                              }`}
                            >
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 font-mono text-xs font-black text-cyan-400">
                                    #{lessonIndex < 10 ? `0${lessonIndex}` : lessonIndex}
                                  </span>

                                  <div className="flex items-center gap-1.5">
                                    {onToggleComplete && (
                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          e.stopPropagation();
                                          onToggleComplete(item.slug, !isCompleted);
                                        }}
                                        title={isCompleted ? "Bỏ đánh dấu hoàn thành" : "Đánh dấu đã học bài này"}
                                        className={`p-1 rounded-lg transition-colors ${
                                          isCompleted
                                            ? "text-emerald-400 hover:text-emerald-300"
                                            : "text-slate-600 hover:text-emerald-400"
                                        }`}
                                      >
                                        <CheckCircle2 size={16} />
                                      </button>
                                    )}

                                    {isCurrent ? (
                                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-white shadow-[0_0_10px_rgba(6,182,212,1)] relative">
                                        <span className="absolute -inset-1 rounded-full bg-cyan-400 opacity-75 animate-ping" />
                                        <Play size={10} className="fill-current translate-x-0.5 relative z-10" />
                                      </span>
                                    ) : isCompleted ? (
                                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
                                        <CheckCircle2 size={13} />
                                      </span>
                                    ) : (
                                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-700 bg-slate-800/60 text-slate-400 group-hover:border-cyan-500/40 group-hover:text-cyan-400 transition-colors">
                                        <Play size={10} className="fill-current translate-x-0.5" />
                                      </span>
                                    )}
                                  </div>
                                </div>

                                {isCurrent && (
                                  <span className="inline-block rounded-md border border-cyan-400/50 bg-cyan-500/20 px-2 py-0.5 text-[10px] font-black text-cyan-300 animate-pulse">
                                    📍 ĐANG HỌC • TIẾP THEO
                                  </span>
                                )}

                                <Link
                                  href={`/learn/${subjectSlug}/${item.slug}`}
                                  className="block text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2"
                                >
                                  {item.title}
                                </Link>
                              </div>

                              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                                <span>{page ? `Trang ${page}` : "Bài học"}</span>
                                <Link
                                  href={`/learn/${subjectSlug}/${item.slug}`}
                                  className="font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                                >
                                  {videosCount} Video ➔
                                </Link>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
