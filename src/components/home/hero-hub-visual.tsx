"use client";

import { motion } from "framer-motion";
import { RobotChip } from "@/components/workbench/robot-chip";

const PILLARS = [
  { label: "Train", color: "#facc15" },
  { label: "Build", color: "#f97316" },
  { label: "Transform", color: "#0066ff" },
  { label: "Deliver", color: "#22c55e" },
] as const;

export function HeroHubVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10"
      >
        <div className="relative mx-auto aspect-[4/5] max-w-sm">
          <div className="absolute inset-x-6 top-0 h-16 rounded-t-2xl bg-gradient-to-b from-primary to-primary/80 shadow-lg">
            <div className="flex h-full items-center justify-center">
              <span className="font-display text-base font-bold tracking-wide text-white sm:text-lg">
                ProVizient
              </span>
            </div>
          </div>

          <div className="absolute inset-x-4 top-14 bottom-20 overflow-visible rounded-lg border border-primary/20 bg-gradient-to-b from-sky-50/80 to-white shadow-xl">
            <div className="flex h-full flex-col items-center px-1 pt-4 pb-1 sm:px-2">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
                Innovation Hub
              </p>
              <div className="relative flex w-full flex-1 items-center justify-center">
                <RobotChip variant="hero" animate={false} className="w-full" />
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex justify-between gap-2 px-2">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex flex-1 flex-col items-center"
              >
                <div
                  className="flex h-28 w-full items-end justify-center rounded-t-xl shadow-md sm:h-32"
                  style={{
                    background: `linear-gradient(180deg, ${pillar.color}22 0%, ${pillar.color} 100%)`,
                  }}
                >
                  <span
                    className="mb-3 font-display text-[10px] font-bold uppercase tracking-wider text-white sm:text-xs"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  >
                    {pillar.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
