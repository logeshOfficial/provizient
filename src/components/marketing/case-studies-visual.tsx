"use client";

import { motion } from "framer-motion";
import { HeroVisualShell } from "@/components/marketing/hero-visual-shell";

const gridShell = "relative z-20 flex h-full w-full flex-col gap-3";
const gridDepth = { transform: "translateZ(28px)" } as const;

const BARS = [72, 48, 88, 58];

export function CaseStudiesVisual() {
  return (
    <HeroVisualShell>
      <div className={gridShell} style={gridDepth}>
        <motion.span
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="self-start rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-[10px] font-semibold text-green-700 sm:px-4 sm:text-[11px]"
        >
          Success
        </motion.span>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-full rounded-2xl border border-primary/20 bg-slate-900 shadow-xl"
        >
          <div className="rounded-t-2xl bg-gradient-to-r from-green-500 to-primary px-4 py-2.5 sm:px-5 sm:py-3">
            <p className="text-center font-display text-[10px] font-bold uppercase tracking-wider text-white sm:text-xs">
              Proven Results
            </p>
          </div>
          <div className="p-3 sm:p-4">
            <div className="mb-3 flex items-end justify-between gap-2">
              {BARS.map((h, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-md bg-gradient-to-t from-primary to-secondary"
                    style={{ height: `${h}px` }}
                  />
                  <span className="text-[8px] text-muted sm:text-[9px]">Q{i + 1}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div className="rounded-lg bg-green-50 px-2 py-2 text-center sm:px-3 sm:py-2.5">
                <p className="text-sm font-bold text-green-700 sm:text-base">40%</p>
                <p className="text-[8px] text-green-600 sm:text-[9px]">Fraud reduction</p>
              </div>
              <div className="rounded-lg bg-blue-50 px-2 py-2 text-center sm:px-3 sm:py-2.5">
                <p className="text-sm font-bold text-blue-700 sm:text-base">3x</p>
                <p className="text-[8px] text-blue-600 sm:text-[9px]">Faster diagnosis</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </HeroVisualShell>
  );
}

