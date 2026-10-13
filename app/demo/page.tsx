import Link from "next/link";
import {
  BookOpen,
  BrainCircuit,
  CheckSquare,
  Database,
  LayoutDashboard,
  Library,
  ArrowRight,
  MonitorPlay,
} from "lucide-react";
import AutoLoginButton from "./AutoLoginButton";

export const metadata = {
  title: "Giới thiệu Hệ thống - EduVerse",
  description: "Khám phá các tính năng của nền tảng giáo dục EduVerse",
};

const modules = [
  {
    id: "learning",
    title: "Learning (Học tập)",
    description:
      "Giao diện học bài đa phương thức. Hỗ trợ học qua Video YouTube, sách PDF và HTML5 trực quan, thân thiện với iPad/Tablet.",
    icon: MonitorPlay,
    color: "bg-blue-500",
    light: "bg-blue-100 text-blue-600",
  },
  {
    id: "assessment",
    title: "Assessment (Luyện tập)",
    description:
      "Hệ thống làm bài, chấm điểm và lưu kết quả với 3 chế độ: Theo ngân hàng câu hỏi, Đề thi hoàn chỉnh và Sách bài tập.",
    icon: CheckSquare,
    color: "bg-emerald-500",
    light: "bg-emerald-100 text-emerald-600",
  },
  {
    id: "flipbook",
    title: "Flipbook (Sách Tương Tác)",
    description:
      "Số hóa sách bài tập thành định dạng tương tác. Học sinh có thể đọc sách và làm quiz (trắc nghiệm/tự luận) trực tiếp trên trang.",
    icon: BrainCircuit,
    color: "bg-purple-500",
    light: "bg-purple-100 text-purple-600",
  },
  {
    id: "question-bank",
    title: "Question Bank",
    description:
      "Tầng dữ liệu lõi lưu trữ tĩnh các câu hỏi trắc nghiệm, tự luận với sự hỗ trợ công thức Toán học (LaTeX) và render đa phương tiện.",
    icon: Database,
    color: "bg-amber-500",
    light: "bg-amber-100 text-amber-600",
  },
  {
    id: "exam-bank",
    title: "Exam Bank",
    description:
      "Tổ hợp các câu hỏi thành các đề kiểm tra, đề thi thử hoàn chỉnh với cấu trúc thời gian và thang điểm rõ ràng.",
    icon: Library,
    color: "bg-rose-500",
    light: "bg-rose-100 text-rose-600",
  },
  {
    id: "administration",
    title: "Dashboard & Quản trị",
    description:
      "Hệ thống báo cáo tiến độ học tập (Progress) chi tiết dành cho học sinh, phụ huynh và công cụ quản trị nội dung (CMS).",
    icon: LayoutDashboard,
    color: "bg-indigo-500",
    light: "bg-indigo-100 text-indigo-600",
  },
];

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-lg font-bold text-white shadow-md shadow-brand-600/25">
              E
            </span>
            <span className="font-display font-bold text-xl text-slate-800 tracking-tight">
              EduVerse
            </span>
            <span className="ml-2 rounded-full bg-accent-amber/20 px-2.5 py-0.5 text-xs font-semibold text-amber-700 border border-amber-200">
              Demo
            </span>
          </div>
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition"
            >
              Trang chủ
            </Link>
            <Link
              href="/login"
              className="text-sm font-semibold text-white bg-brand-600 px-5 py-2.5 rounded-full hover:bg-brand-700 shadow-md shadow-brand-600/20 transition active:scale-[0.98]"
            >
              Đăng nhập Dashboard
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-20">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-200/50 rounded-full blur-[80px] -z-10"></div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Nền tảng Giáo dục <br />
            <span className="text-brand-600">Đa phương thức</span> & Tương tác
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Khám phá hệ sinh thái học tập và luyện thi được xây dựng trên kiến trúc Question-centric, mang lại trải nghiệm tối ưu cho học sinh và công cụ quản trị mạnh mẽ.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
             <a href="#architecture" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-slate-800">
               Khám phá Kiến trúc <ArrowRight className="ml-2 w-5 h-5" />
             </a>
             <AutoLoginButton />
          </div>
        </div>

        {/* Architecture / Modules Grid */}
        <div id="architecture" className="mb-24 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">6 Phân hệ Kiến trúc Lõi</h2>
            <p className="text-slate-600">Hệ thống được chia thành 3 lớp: Content (Tĩnh) - Attempts (Làm bài) - Progress (Tiến độ)</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod) => (
              <div
                key={mod.id}
                className="group bg-white rounded-3xl p-8 shadow-card border border-slate-200/80 hover:shadow-card-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${mod.light}`}>
                  <mod.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {mod.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {mod.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Workflow Section */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-card border border-slate-200/80 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-accent-mint/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-brand-100/40 rounded-full blur-3xl"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
            <div>
              <p className="mb-3 inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
                Workflow
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Trải nghiệm học tập <br /> liền mạch từ A đến Z
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Học Lý Thuyết",
                    desc: "Qua các bài giảng Video chất lượng, sách PDF được nhúng trực tiếp trên nền tảng an toàn.",
                  },
                  {
                    step: "2",
                    title: "Làm Bài Tập & Quiz",
                    desc: "Thực hành ngay trên sách bài tập số hóa. Hệ thống phản hồi đúng/sai tức thì kèm âm thanh động lực.",
                  },
                  {
                    step: "3",
                    title: "Kiểm Tra (Exam Bank)",
                    desc: "Tham gia các bài thi chuẩn hóa, tự động chấm điểm với hệ thống chống gian lận và bộ đếm thời gian.",
                  },
                  {
                    step: "4",
                    title: "Theo Dõi Tiến Độ",
                    desc: "Dashboard hiển thị lịch sử học, thống kê điểm số tự động để phụ huynh và học sinh dễ dàng nắm bắt.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1 h-8 w-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-sm shadow-sm border border-brand-200">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{item.title}</h4>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <AutoLoginButton />
              </div>
            </div>
            
            {/* Visual representation */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden relative flex flex-col transform lg:rotate-2 hover:rotate-0 transition duration-500">
                {/* Fake browser header */}
                <div className="bg-slate-800/80 backdrop-blur-sm border-b border-white/10 p-3 flex items-center gap-2">
                  <div className="flex gap-1.5 ml-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="mx-auto bg-slate-900/50 rounded-md px-3 py-1 text-[10px] text-slate-400 font-mono border border-white/5">
                    eduverse.app / dashboard
                  </div>
                </div>
                
                {/* Dashboard UI wireframe */}
                <div className="flex-1 p-5 flex flex-col gap-4 bg-gradient-to-br from-slate-900 to-slate-800">
                  <div className="h-6 w-32 bg-white/10 rounded"></div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-20 bg-brand-500/20 border border-brand-500/30 rounded-xl p-3">
                       <div className="w-6 h-6 rounded-full bg-brand-400/20 mb-2"></div>
                       <div className="h-2 w-16 bg-white/40 rounded mb-1"></div>
                       <div className="h-3 w-10 bg-white/80 rounded"></div>
                    </div>
                    <div className="h-20 bg-accent-mint/20 border border-accent-mint/30 rounded-xl p-3">
                       <div className="w-6 h-6 rounded-full bg-accent-mint/20 mb-2"></div>
                       <div className="h-2 w-16 bg-white/40 rounded mb-1"></div>
                       <div className="h-3 w-10 bg-white/80 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4">
                     <div className="flex items-center justify-between mb-4">
                        <div className="h-3 w-24 bg-white/30 rounded"></div>
                        <div className="h-2 w-12 bg-white/10 rounded"></div>
                     </div>
                     <div className="space-y-3">
                       <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-lg bg-white/10 shrink-0"></div>
                         <div className="flex-1 space-y-1.5">
                           <div className="h-2 w-full bg-white/20 rounded"></div>
                           <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                         </div>
                       </div>
                       <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-lg bg-white/10 shrink-0"></div>
                         <div className="flex-1 space-y-1.5">
                           <div className="h-2 w-11/12 bg-white/20 rounded"></div>
                           <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                         </div>
                       </div>
                     </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-card-lg border border-slate-100 flex items-center gap-4 transform -rotate-3">
                 <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                    <CheckSquare className="w-6 h-6 text-brand-600" />
                 </div>
                 <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase">Hoàn thành bài tập</p>
                    <p className="font-display font-bold text-slate-900">+100 điểm</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="mt-24 border-t border-slate-200 bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-slate-500">
          <p>© 2026 EduVerse Platform. Kiến trúc tĩnh và linh hoạt.</p>
        </div>
      </footer>
    </div>
  );
}
