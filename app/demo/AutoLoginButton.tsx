"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2 } from "lucide-react";

export default function AutoLoginButton() {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDemoLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const { error: signErr } = await supabase.auth.signInWithPassword({
        email: "demo@eduverse.app",
        password: "demo123",
      });

      if (signErr) throw signErr;

      router.refresh();
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Đã có lỗi xảy ra");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={handleDemoLogin}
        disabled={loading}
        className="inline-flex items-center justify-center rounded-full bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700 disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.98]"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 w-5 h-5 animate-spin" /> Đang đăng nhập...
          </>
        ) : (
          <>
            Trải nghiệm Dashboard ngay <ArrowRight className="ml-2 w-5 h-5" />
          </>
        )}
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <p className="text-xs text-slate-500 mt-2">
        (Tự động đăng nhập bằng tài khoản Demo)
      </p>
    </div>
  );
}
