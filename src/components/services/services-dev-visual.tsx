"use client";

import { motion } from "framer-motion";
import { HeroVisualShell } from "@/components/marketing/hero-visual-shell";

const CODE_LINES = [
  { width: "72%", color: "#0066ff" },
  { width: "58%", color: "#64748b" },
  { width: "76%", color: "#22c55e" },
  { width: "52%", color: "#6366f1" },
];

export function ServicesDevVisual() {
  return (
    <HeroVisualShell>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute left-1/2 top-[2%] w-[68%] -translate-x-1/2 rounded-xl border border-primary/20 bg-white shadow-lg"
      >
        <div className="flex items-center gap-1.5 rounded-t-xl border-b border-card-border bg-gradient-to-r from-slate-50 to-sky-50 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="h-2 w-2 rounded-full bg-green-400" />
          <span className="ml-1 truncate font-mono text-[9px] text-muted">
            main.tsx
          </span>
        </div>
        <div className="space-y-1.5 p-3">
          {CODE_LINES.map((line, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span className="w-3 shrink-0 text-right font-mono text-[8px] text-muted/60">
                {i + 1}
              </span>
              <div
                className="h-1.5 rounded-full"
                style={{ width: line.width, backgroundColor: `${line.color}33` }}
              />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[36%] left-[6%] w-[34%] rounded-lg border border-card-border bg-white/95 p-2 shadow-md"
      >
        <p className="font-display text-[8px] font-bold uppercase tracking-wider text-primary">
          Cloud API
        </p>
        <div className="mt-1.5 flex gap-1">
          <span className="rounded bg-green-100 px-1 py-0.5 text-[7px] font-semibold text-green-700">
            REST
          </span>
          <span className="rounded bg-blue-100 px-1 py-0.5 text-[7px] font-semibold text-blue-700">
            Azure
          </span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute bottom-[34%] right-[4%] w-[32%] rounded-lg border border-card-border bg-white/95 p-2 shadow-md"
      >
        <p className="font-display text-[8px] font-bold uppercase tracking-wider text-primary">
          Data Layer
        </p>
        <svg viewBox="0 0 80 40" className="mx-auto mt-1 h-8 w-full">
          <ellipse cx="40" cy="10" rx="26" ry="7" fill="#0066ff" opacity="0.12" stroke="#0066ff" strokeWidth="1.2" />
          <path d="M14 10 v12 c0 3.8 11.6 7 26 7 s26-3.2 26-7 V10" fill="#0066ff" opacity="0.08" stroke="#0066ff" strokeWidth="1.2" />
          <ellipse cx="40" cy="22" rx="26" ry="7" fill="none" stroke="#00a3e0" strokeWidth="1.2" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] top-[14%] rounded-full border border-primary/20 bg-white px-2 py-1 text-[9px] font-semibold text-primary shadow-sm"
      >
        CI/CD
      </motion.div>
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute left-[10%] top-[16%] rounded-full border border-secondary/30 bg-white px-2 py-1 text-[9px] font-semibold text-secondary shadow-sm"
      >
        DevOps
      </motion.div>
    </HeroVisualShell>
  );
}
