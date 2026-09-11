"use client";

import { useRouter } from "next/navigation";

export default function ValidTaskMessage() {
        const router = useRouter();
    
        setTimeout(() => {
            router.push("/dashboard");
        }, 3000)

  return (
    <div className="flex min-h-screen items-center justify-center bg-black/80 px-5">

      <div className="relative w-full max-w-md">

        {/* Soft success glow */}
        <div className="absolute inset-0 bg-green-500/10 blur-2xl" />

        {/* Main HUD panel */}
        <div className="relative overflow-hidden border border-orange-400/40 bg-black/80 px-6 py-7 shadow-[0_0_30px_rgba(249,115,22,0.12)] backdrop-blur-md">

          {/* Angular corners */}
          <div className="absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-orange-400" />
          <div className="absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-orange-400" />
          <div className="absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-orange-400" />
          <div className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-orange-400" />

          {/* Header */}
          <div className="mb-6 flex items-center gap-4">

            {/* Success icon */}
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center border border-green-400/50 bg-green-500/10 shadow-[0_0_18px_rgba(74,222,128,0.2)]">

              <div className="absolute inset-2 border border-green-400/30" />

              <span className="text-xl font-bold text-green-400">
                ✓
              </span>

            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-orange-400/60">
                Clean Quest
              </p>

              <h2 className="mt-1 text-xl font-semibold tracking-widest text-orange-100">
                TASK VERIFIED
              </h2>
            </div>

          </div>

          {/* Divider */}
          <div className="mb-5 h-px bg-gradient-to-r from-green-400/50 via-orange-400/20 to-transparent" />

          {/* Main message */}
          <div className="mb-6">

            <p className="text-base font-semibold tracking-wide text-green-300">
              GOOD JOB!
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-300">
              Your picture is valid. You completed your task!
            </p>

          </div>

          {/* Verification status */}
          <div className="flex items-center gap-3 border border-green-400/20 bg-green-500/[0.04] px-4 py-3">

            <span className="h-2 w-2 animate-pulse bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.9)]" />

            <span className="text-[10px] uppercase tracking-[0.2em] text-green-400/80">
              Task Successfully Verified
            </span>

          </div>

          {/* Bottom HUD */}
          <div className="mt-5 flex items-center justify-between">

            <div className="flex gap-1">
              <span className="h-1 w-5 bg-green-400/70" />
              <span className="h-1 w-5 bg-green-400/40" />
              <span className="h-1 w-5 bg-green-400/20" />
            </div>

            <span className="font-mono text-[9px] tracking-widest text-green-400/50">
              QUEST // COMPLETE
            </span>

          </div>

        </div>
      </div>

    </div>
  );
}