"use client";

import Link from "next/link";
import { ArrowLeft, PlayCircle, Eye } from "lucide-react";
import lessons from "@/content/toeic-thay-long-lessons.json";

export default function ToeicThayLongPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-surface text-white pb-20">
      <div className="mx-auto max-w-5xl w-full px-6 py-8">
        <Link
          href="/hoc-tap"
          className="inline-flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-sky-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Quay lại
        </Link>

        <header className="mb-12">
          <h1 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Lớp TOEIC Thầy Long
          </h1>
          <p className="mt-2 text-slate-400 font-medium">
            Học TOEIC qua các bài giảng video sinh động và chi tiết.
          </p>
        </header>

        {lessons.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            Chưa có bài học nào được tạo.
          </div>
        ) : (
          <div className="space-y-12">
            <section>
              <h2 className="text-xl font-bold text-white mb-4 border-b border-line/50 pb-2">
                Tất cả bài học
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {lessons.map((lesson: any) => (
                  <div key={lesson.id} className="group relative flex flex-col cursor-pointer bg-slate-900 border border-slate-700/50 rounded-xl overflow-hidden shadow-lg hover:border-sky-500 transition-colors">
                    <Link href={`/hoc-tap/toeic-thay-long/${lesson.slug}`} className={`block relative ${lesson.aspectRatio === 'vertical' ? 'aspect-[9/16]' : 'aspect-video'} bg-black flex flex-col items-center justify-center overflow-hidden`}>
                      {lesson.thumbnail ? (
                        <>
                          <img src={lesson.thumbnail} alt={lesson.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300" />
                          <PlayCircle className="w-12 h-12 text-white/70 group-hover:text-white transition-colors z-10 relative drop-shadow-lg" />
                        </>
                      ) : (
                        <PlayCircle className="w-12 h-12 text-slate-500 group-hover:text-sky-400 transition-colors z-10 relative" />
                      )}
                    </Link>
                    <div className="p-4 flex flex-col gap-1">
                      <Link href={`/hoc-tap/toeic-thay-long/${lesson.slug}`}>
                         <h3 className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors line-clamp-2">
                           {lesson.title}
                         </h3>
                      </Link>
                      <p className="text-xs text-slate-400 line-clamp-1">{lesson.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
