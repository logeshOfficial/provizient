"use client";

import { motion } from "framer-motion";
import { HeroVisualShell } from "@/components/marketing/hero-visual-shell";

const gridShell = "relative z-20 flex h-full w-full flex-col gap-3";
const gridDepth = { transform: "translateZ(28px)" } as const;

const CHIPS = [
  { label: "Email", color: "text-primary" },
  { label: "Phone", color: "text-secondary" },
  { label: "Office", color: "text-accent" },
  { label: "Hours", color: "text-green-600" },
];

export function ContactConnectVisual() {
  return (
    <HeroVisualShell glow="secondary">
      <div className={gridShell} style={gridDepth}>
        <div className="grid grid-cols-2 gap-3">
          {CHIPS.slice(0, 2).map((chip, i) => (
            <motion.div
              key={chip.label}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.8 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
              className={i === 1 ? "justify-self-end" : ""}
            >
              <div className="rounded-xl border border-card-border bg-card/95 px-3 py-2 shadow-md sm:px-4 sm:py-2.5">
                <p className={`text-[10px] font-bold sm:text-[11px] ${chip.color}`}>{chip.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-full rounded-2xl border border-primary/20 bg-slate-900 shadow-xl"
        >
          <div className="rounded-t-2xl border-b border-card-border bg-surface px-4 py-2.5 sm:px-5 sm:py-3">
            <p className="font-display text-[10px] font-bold uppercase tracking-wider text-primary sm:text-xs">
              Get in Touch
            </p>
          </div>
          <div className="space-y-3 p-3 sm:p-4">
            <div className="rounded-xl bg-primary/5 px-3 py-2.5 sm:px-4 sm:py-3">
              <p className="text-[9px] font-semibold uppercase text-muted sm:text-[10px]">Message</p>
              <p className="text-[11px] text-foreground sm:text-xs">Tell us about your AI goals...</p>
            </div>
            <div className="flex justify-end">
              <span className="rounded-xl bg-primary px-3 py-1.5 text-[10px] font-semibold text-white sm:px-4 sm:py-2 sm:text-[11px]">
                Send
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          {CHIPS.slice(2).map((chip, i) => (
            <motion.div
              key={chip.label}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className={i === 1 ? "justify-self-end" : ""}
            >
              <div className="rounded-xl border border-card-border bg-card/95 px-3 py-2 shadow-md sm:px-4 sm:py-2.5">
                <p className={`text-[10px] font-bold sm:text-[11px] ${chip.color}`}>{chip.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </HeroVisualShell>
  );
}

