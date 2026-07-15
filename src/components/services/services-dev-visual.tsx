"use client";

import { motion } from "framer-motion";
import { HeroVisualShell } from "@/components/marketing/hero-visual-shell";

const CODE_LINES = [
  { width: "78%", color: "#0066ff" },
  { width: "64%", color: "#64748b" },
  { width: "88%", color: "#22c55e" },
  { width: "52%", color: "#64748b" },
  { width: "72%", color: "#6366f1" },
];

export function ServicesDevVisual() {
  return (
    <HeroVisualShell>
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-30"
        viewBox="0 0 400 400"
        aria-hidden="true"
      >
        <path
          d="M 110 280 Q 200 220 200 170"
          fill="none"
          stroke="#0066ff"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M 290 275 Q 200 215 200 170"
          fill="none"
          stroke="#00a3e0"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <circle cx="200" cy="170" r="4" fill="#0066ff" className="circuit-dot" />
      </svg>

      <div
        className="relative z-20 flex h-full w-full flex-col gap-3"
        style={{ transform: "translateZ(28px)" }}
      >
        <div className="flex items-start justify-between gap-2">
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="rounded-full border border-secondary/30 bg-card px-3 py-1.5 text-[10px] font-semibold text-secondary shadow-md sm:px-4 sm:py-2 sm:text-[11px]"
          >
            DevOps
          </motion.span>
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-full border border-primary/20 bg-card px-3 py-1.5 text-[10px] font-semibold text-primary shadow-md sm:px-4 sm:py-2 sm:text-[11px]"
          >
            CI/CD
          </motion.span>
        </div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          className="w-full rounded-2xl border border-primary/20 bg-card shadow-[0_20px_50px_rgba(15,23,42,0.14)]"
        >
          <div className="flex items-center gap-2 rounded-t-2xl border-b border-card-border bg-gradient-to-r from-slate-900 to-slate-800 px-4 py-2.5 sm:px-5 sm:py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400 sm:h-3 sm:w-3" />
            <span className="ml-1 truncate font-mono text-[10px] text-muted sm:text-[11px]">
              provizient-app / main.tsx
            </span>
          </div>
          <div className="space-y-2 p-4 sm:space-y-2.5 sm:p-5">
            {CODE_LINES.map((line, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-4 shrink-0 text-right font-mono text-[9px] text-muted/60 sm:w-5 sm:text-[10px]">
                  {i + 1}
                </span>
                <div
                  className="h-2 rounded-full sm:h-2.5"
                  style={{ width: line.width, backgroundColor: `${line.color}33` }}
                />
              </div>
            ))}
            <div className="mt-2 flex items-center gap-2 rounded-lg bg-primary/5 px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500 sm:h-2 sm:w-2" />
              <span className="font-mono text-[9px] text-primary sm:text-[10px]">
                Build successful · Deploy ready
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-xl border border-card-border bg-card/95 p-2.5 shadow-lg sm:p-3"
          >
            <div className="mb-1 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              <span className="font-display text-[9px] font-bold uppercase tracking-wider text-primary sm:text-[10px]">
                Cloud API
              </span>
            </div>
            <div className="flex gap-1">
              <span className="rounded bg-green-100 px-1.5 py-0.5 text-[7px] font-semibold text-green-700 sm:text-[8px]">
                REST
              </span>
              <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[7px] font-semibold text-blue-700 sm:text-[8px]">
                Azure
              </span>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="rounded-xl border border-card-border bg-card/95 p-2.5 shadow-lg sm:p-3"
          >
            <div className="mb-1 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="font-display text-[9px] font-bold uppercase tracking-wider text-primary sm:text-[10px]">
                Data Layer
              </span>
            </div>
            <svg viewBox="0 0 80 40" className="h-8 w-full sm:h-10">
              <ellipse cx="40" cy="10" rx="26" ry="7" fill="#0066ff" opacity="0.12" stroke="#0066ff" strokeWidth="1.2" />
              <path d="M14 10 v12 c0 3.8 11.6 7 26 7 s26-3.2 26-7 V10" fill="#0066ff" opacity="0.08" stroke="#0066ff" strokeWidth="1.2" />
              <ellipse cx="40" cy="22" rx="26" ry="7" fill="none" stroke="#00a3e0" strokeWidth="1.2" />
            </svg>
          </motion.div>
        </div>
      </div>
    </HeroVisualShell>
  );
}


