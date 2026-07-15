"use client";

import { motion } from "framer-motion";
import { HeroVisualShell } from "@/components/marketing/hero-visual-shell";

const ARTICLES = [
  { tag: "AI Strategy", title: "Enterprise AI Trends", rotate: -3 },
  { tag: "Governance", title: "Responsible AI", rotate: 2 },
  { tag: "ROI", title: "Measuring GenAI Value", rotate: -1 },
];

const gridShell = "relative z-20 flex h-full w-full flex-col gap-3";
const gridDepth = { transform: "translateZ(28px)" } as const;

export function BlogInsightsVisual() {
  return (
    <HeroVisualShell glow="accent">
      <div className={gridShell} style={gridDepth}>
        <div className="flex items-start justify-between gap-2">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="max-w-[45%] rounded-xl border border-card-border bg-card/95 p-2.5 shadow-md sm:p-3"
          >
            <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[9px] font-semibold text-accent">
              Trending
            </span>
            <p className="mt-1 font-display text-[10px] font-bold text-foreground">
              GenAI Playbook
            </p>
          </motion.div>
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-full border border-accent/30 bg-card px-3 py-1.5 text-[10px] font-semibold text-accent shadow-md sm:px-4 sm:py-2 sm:text-[11px]"
          >
            Insights
          </motion.span>
        </div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-full rounded-2xl border border-primary/20 bg-slate-900 shadow-xl"
        >
          <div className="rounded-t-2xl bg-gradient-to-r from-primary to-accent px-4 py-2.5 sm:px-5 sm:py-3">
            <p className="text-center font-display text-[10px] font-bold uppercase tracking-wider text-white sm:text-xs">
              Thought Leadership
            </p>
          </div>
          <div className="space-y-2.5 p-3 sm:space-y-3 sm:p-4">
            {ARTICLES.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-card-border bg-surface px-3 py-2.5 sm:px-4 sm:py-3"
                style={{ transform: `rotate(${card.rotate}deg)` }}
              >
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-semibold text-primary sm:text-[10px]">
                  {card.tag}
                </span>
                <p className="mt-1 font-display text-[10px] font-bold text-foreground sm:text-xs">
                  {card.title}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </HeroVisualShell>
  );
}

