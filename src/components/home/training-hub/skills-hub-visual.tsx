"use client";

import { motion } from "framer-motion";
import {
  TrnAIMLFoundationsIcon,
  AwardIcon,
  GraduationCapIcon,
  BotIcon,
  SparklesIcon,
} from "@/components/icons/provizient-icons";
import { TRAINING_PROGRAMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { TRAINING_ICON_MAP } from "@/lib/icon-maps";

const PROGRAM_COLORS: Record<string, string> = {
  purple: "#a855f7",
  blue: "#0066ff",
  green: "#22c55e",
  yellow: "#eab308",
  orange: "#f97316",
};

export function SkillsHubVisual() {
  return (
    <div className="relative z-10 w-full px-8 py-5 sm:px-10 sm:py-6">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative mx-auto w-full rounded-2xl border border-primary/20 bg-slate-900 shadow-2xl"
      >
        <div className="rounded-t-2xl bg-gradient-to-r from-primary via-primary to-secondary px-5 py-3.5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-wider text-white">
                ProVizient Workbench
              </p>
              <p className="text-[11px] text-white/80">Future-Ready Skills Hub</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-card/20">
              <GraduationCapIcon size={22} className="text-white" />
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="mb-4 flex items-center gap-3 rounded-xl bg-surface px-4 py-3">
            <div className="relative h-12 w-12 shrink-0">
              <svg viewBox="0 0 48 48" className="h-full w-full -rotate-90">
                <circle cx="24" cy="24" r="20" fill="none" stroke="#e2e8f0" strokeWidth="4" />
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  stroke="#0066ff"
                  strokeWidth="4"
                  strokeDasharray="88 125.6"
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center font-display text-xs font-bold text-primary">
                6
              </span>
            </div>
            <div>
              <p className="font-display text-sm font-bold text-foreground">Active Programs</p>
              <p className="text-xs text-muted">AI · Data · Programming tracks</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            {TRAINING_PROGRAMS.map((program, i) => {
              const Icon = TRAINING_ICON_MAP[program.icon as keyof typeof TRAINING_ICON_MAP] || TrnAIMLFoundationsIcon;
              const accent = PROGRAM_COLORS[program.color] || "#0066ff";
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-2.5 rounded-xl border border-card-border bg-card px-3 py-2.5 shadow-sm"
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${accent}18` }}
                  >
                    <Icon size={18} className="shrink-0" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-display text-xs font-bold text-foreground">
                      {program.title}
                    </p>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-surface">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${55 + (i % 3) * 15}%`,
                          backgroundColor: accent,
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {[
        { icon: AwardIcon,    label: "Expert Trainers", position: "left-1 top-0 sm:left-2", delay: 0 },
        { icon: BotIcon,      label: "Agentic AI", position: "left-0 top-[36%] sm:left-1", delay: 0.6 },
        { icon: SparklesIcon, label: "Hands-on Labs", position: "right-1 bottom-0 sm:right-2", delay: 0.4 },
      ].map((chip) => (
        <motion.div
          key={chip.label}
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 4 + chip.delay * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: chip.delay,
          }}
          className={cn(
            "absolute z-20 flex items-center gap-2 rounded-xl border border-card-border bg-card/95 px-3 py-2 shadow-lg",
            chip.position
          )}
        >
          <chip.icon size={16} className="text-primary" />
          <span className="text-[11px] font-semibold text-foreground">{chip.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

