"use client";

import { motion } from "framer-motion";

export function RobotChip() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="relative mx-auto w-full max-w-md"
    >
      <div className="absolute left-0 top-1/2 h-0.5 w-[18%] -translate-y-1/2 bg-foreground/80" />
      <div className="absolute right-0 top-1/2 h-0.5 w-[18%] -translate-y-1/2 bg-foreground/80" />

      <div className="absolute left-[16%] top-1/2 flex -translate-y-1/2 gap-1">
        <span className="h-2 w-2 rounded-sm bg-green-500" />
        <span className="h-2 w-2 rounded-sm bg-red-500" />
        <span className="h-2 w-2 rounded-sm bg-primary" />
      </div>
      <div className="absolute right-[16%] top-1/2 flex -translate-y-1/2 gap-1">
        <span className="h-2 w-2 rounded-sm bg-yellow-400" />
        <span className="h-2 w-2 rounded-sm bg-primary" />
        <span className="h-2 w-2 rounded-sm bg-green-500" />
      </div>

      <div className="relative mx-auto w-[min(100%,320px)]">
        <div className="chip-frame relative mx-auto aspect-[1.15/1] max-w-[280px] rounded-2xl border-2 border-foreground/10 bg-gradient-to-b from-sky-50 to-white p-6 shadow-xl">
          <div className="absolute inset-3 rounded-xl border border-primary/15" />
          <div className="absolute left-4 top-4 h-3 w-8 rounded bg-green-400/80" />
          <div className="absolute right-4 top-4 h-3 w-6 rounded bg-red-400/80" />
          <div className="absolute bottom-4 left-4 h-3 w-6 rounded bg-primary/60" />
          <div className="absolute bottom-4 right-4 h-3 w-10 rounded bg-yellow-400/80" />

          <div className="relative flex h-full flex-col items-center justify-center pt-2">
            <div className="robot-head relative mb-2 h-28 w-28 rounded-3xl border-2 border-foreground/10 bg-white shadow-inner">
              <div className="absolute left-1/2 top-5 flex -translate-x-1/2 gap-5">
                <span className="robot-eye h-4 w-4 rounded-full bg-foreground" />
                <span className="robot-eye robot-eye-delay h-4 w-4 rounded-full bg-foreground" />
              </div>
              <div className="absolute bottom-7 left-1/2 h-3 w-10 -translate-x-1/2 rounded-full border-b-4 border-foreground" />
              <div className="absolute -left-3 top-10 h-8 w-3 rounded-l-lg bg-white border border-foreground/10" />
              <div className="absolute -right-3 top-10 h-8 w-3 rounded-r-lg bg-white border border-foreground/10" />
            </div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
              AI Core
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
