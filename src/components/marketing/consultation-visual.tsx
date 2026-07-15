"use client";

import { motion } from "framer-motion";
import { HeroVisualShell } from "@/components/marketing/hero-visual-shell";

const gridShell = "relative z-20 flex h-full w-full flex-col gap-3";
const gridDepth = { transform: "translateZ(28px)" } as const;

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const SLOTS = [true, true, false, true, true];
const AGENDA = ["AI readiness review", "Opportunity mapping", "Expert guidance"];

export function ConsultationVisual() {
  return (
    <HeroVisualShell glow="secondary">
      <div className={gridShell} style={gridDepth}>
        <div className="flex items-start justify-between gap-2">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
            className="max-w-[48%] rounded-xl border border-card-border bg-card/95 p-2.5 shadow-md sm:p-3"
          >
            <p className="text-[10px] font-semibold text-primary">Expert match</p>
            <p className="mt-0.5 text-[9px] text-muted">AI strategist assigned</p>
          </motion.div>
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-full border border-primary/30 bg-card px-3 py-1.5 text-[10px] font-semibold text-primary shadow-md sm:px-4 sm:text-[11px]"
          >
            Free 60 min
          </motion.span>
        </div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-full rounded-2xl border border-primary/20 bg-slate-900 shadow-xl"
        >
          <div className="rounded-t-2xl border-b border-card-border bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2.5 sm:px-5 sm:py-3">
            <p className="font-display text-[10px] font-bold uppercase tracking-wider text-primary sm:text-xs">
              Strategy Session
            </p>
          </div>
          <div className="p-3 sm:p-4">
            <div className="mb-3 grid grid-cols-5 gap-1">
              {DAYS.map((day, i) => (
                <div key={day} className="text-center">
                  <p className="text-[8px] text-muted sm:text-[9px]">{day}</p>
                  <div
                    className={`mt-1 rounded-md py-2 text-[9px] font-bold sm:py-2.5 sm:text-[10px] ${
                      SLOTS[i] ? "bg-primary text-white" : "bg-surface text-muted"
                    }`}
                  >
                    {8 + i}:00
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              {AGENDA.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-lg bg-surface px-2.5 py-1.5 sm:px-3 sm:py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 sm:h-2 sm:w-2" />
                  <span className="text-[10px] text-foreground sm:text-[11px]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </HeroVisualShell>
  );
}

