"use client";

import { motion } from "framer-motion";
import { HeroVisualShell } from "@/components/marketing/hero-visual-shell";

const gridShell = "relative z-20 flex h-full w-full flex-col gap-3";
const gridDepth = { transform: "translateZ(28px)" } as const;

const SECTORS = [
  { label: "Finance", color: "#0066ff" },
  { label: "Health", color: "#22c55e" },
  { label: "Energy", color: "#eab308" },
  { label: "Mfg", color: "#f97316" },
  { label: "Retail", color: "#6366f1" },
];

export function IndustriesVisual() {
  return (
    <HeroVisualShell glow="accent">
      <div className={gridShell} style={gridDepth}>
        <div className="flex justify-center">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-full border border-card-border bg-card px-4 py-1.5 shadow-md"
          >
            <span
              className="mr-1.5 inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: SECTORS[0].color }}
            />
            <span className="text-[10px] font-semibold text-foreground sm:text-[11px]">
              {SECTORS[0].label}
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3">
          <div className="flex flex-col gap-2 sm:gap-3">
            {[SECTORS[3], SECTORS[4]].map((s) => (
              <motion.div
                key={s.label}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-full border border-card-border bg-card px-3 py-1.5 shadow-md sm:px-4"
              >
                <span className="mr-1 inline-block h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} />
                <span className="text-[10px] font-semibold sm:text-[11px]">{s.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-2xl border-2 border-primary bg-card shadow-lg sm:h-32 sm:w-32"
          >
            <span className="font-display text-xl font-bold text-primary sm:text-2xl">AI</span>
            <span className="text-[10px] font-medium text-muted sm:text-xs">Hub</span>
          </motion.div>

          <div className="flex flex-col items-end gap-2 sm:gap-3">
            {[SECTORS[1], SECTORS[2]].map((s) => (
              <motion.div
                key={s.label}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-full border border-card-border bg-card px-3 py-1.5 shadow-md sm:px-4"
              >
                <span className="mr-1 inline-block h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} />
                <span className="text-[10px] font-semibold sm:text-[11px]">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </HeroVisualShell>
  );
}

