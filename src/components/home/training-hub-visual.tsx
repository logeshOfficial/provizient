"use client";

import { motion } from "framer-motion";
import {
  TrnAIMLFoundationsIcon,
  TrnGenAILLMsIcon,
  TrnAgenticAIIcon,
  TrnRAGKnowledgeIcon,
  TrnAIDevFrameworksIcon,
  TrnCloudAIPlatformsIcon,
  TrnProgrammingDataIcon,
  AwardIcon,
  GraduationCapIcon,
  BotIcon,
  SparklesIcon,
  SearchIcon,
  BrainIcon,
  TerminalIcon,
  BarChart3Icon,
} from "@/components/icons/provizient-icons";
import { TRAINING_PROGRAMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const PROGRAM_ICONS = {
  Sparkles: TrnGenAILLMsIcon,
  Bot:      TrnAgenticAIIcon,
  Search:   TrnRAGKnowledgeIcon,
  Brain:    TrnAIMLFoundationsIcon,
  Terminal: TrnProgrammingDataIcon,
  BarChart3: TrnProgrammingDataIcon,
  Code2:    TrnAIDevFrameworksIcon,
  Cloud:    TrnCloudAIPlatformsIcon,
} as const;

const PROGRAM_COLORS: Record<string, string> = {
  purple: "#a855f7",
  blue: "#0066ff",
  green: "#22c55e",
  yellow: "#eab308",
  orange: "#f97316",
};

export type TrainingVisualVariant = "skills-hub" | "learning-path" | "lab-bench";

type TrainingHubVisualProps = {
  variant?: TrainingVisualVariant;
  className?: string;
};

function VisualGlow({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0", className)}>
      <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-8 top-1/4 h-40 w-40 rounded-full bg-secondary/10 blur-2xl" />
      <div className="absolute -left-6 bottom-1/4 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
    </div>
  );
}

function SkillsHubVisual() {
  return (
    <div className="relative z-10 w-full px-8 py-5 sm:px-10 sm:py-6">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative mx-auto w-full rounded-2xl border border-primary/20 bg-white shadow-2xl"
      >
        <div className="rounded-t-2xl bg-gradient-to-r from-primary via-primary to-secondary px-5 py-3.5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-wider text-white">
                ProVizient Workbench
              </p>
              <p className="text-[11px] text-white/80">Future-Ready Skills Hub</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
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
              const Icon = PROGRAM_ICONS[program.icon as keyof typeof PROGRAM_ICONS] || TrnAIMLFoundationsIcon;
              const accent = PROGRAM_COLORS[program.color] || "#0066ff";
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-2.5 rounded-xl border border-card-border bg-white px-3 py-2.5 shadow-sm"
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
        {
          icon: SparklesIcon,
          label: "Hands-on Labs",
          position: "right-1 bottom-0 sm:right-2",
          delay: 0.4,
        },
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
            "absolute z-20 flex items-center gap-2 rounded-xl border border-card-border bg-white/95 px-3 py-2 shadow-lg",
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

function LearningPathVisual() {
  const nodes = TRAINING_PROGRAMS.map((p, i) => {
    const angle = (i / TRAINING_PROGRAMS.length) * Math.PI * 2 - Math.PI / 2;
    const radius = 38;
    return {
      ...p,
      x: 50 + Math.cos(angle) * radius,
      y: 50 + Math.sin(angle) * radius,
    };
  });

  return (
    <div className="relative z-10 flex h-full w-full items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute h-[78%] w-[78%] rounded-full border border-dashed border-primary/20"
      />

      <svg viewBox="0 0 100 100" className="absolute h-[85%] w-[85%] opacity-30">
        {nodes.map((node, i) => (
          <line
            key={`edge-${node.id}`}
            x1="50"
            y1="50"
            x2={node.x}
            y2={node.y}
            stroke="#0066ff"
            strokeWidth="0.6"
            strokeDasharray="2 2"
          />
        ))}
      </svg>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-[18%] z-10 w-[52%] -translate-x-1/2 rounded-2xl border border-primary/25 bg-white p-4 shadow-xl"
      >
        <p className="text-center font-display text-xs font-bold uppercase tracking-wider text-primary">
          Learning Path
        </p>
        <p className="mt-1 text-center text-[10px] text-muted">
          Structured tracks from fundamentals to advanced
        </p>
        <div className="mt-3 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg">
            <BrainIcon size={28} className="text-white" />
          </div>
        </div>
      </motion.div>

      {nodes.map((node, i) => {
        const Icon = PROGRAM_ICONS[node.icon as keyof typeof PROGRAM_ICONS] || TrnAIMLFoundationsIcon;
        const accent = PROGRAM_COLORS[node.color] || "#0066ff";
        return (
          <motion.div
            key={node.id}
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 3.5 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <div className="flex flex-col items-center gap-1">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white shadow-lg"
                style={{ boxShadow: `0 8px 24px ${accent}33` }}
              >
                <Icon size={20} className="shrink-0" />
              </div>
              <span className="rounded-full bg-white/95 px-2 py-0.5 text-[9px] font-bold text-foreground shadow-sm">
                {node.title}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function LabBenchVisual() {
  const lines = [
    { text: "from provizient import Agent", color: "#6366f1" },
    { text: "model = Agent.train(dataset)", color: "#0066ff" },
    { text: "results = model.evaluate()", color: "#22c55e" },
    { text: "print(f'Accuracy: {results:.2f}')", color: "#64748b" },
  ];

  return (
    <div className="relative z-10 w-full px-8 py-5 sm:px-10 sm:py-6">
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        className="relative mx-auto w-full rounded-2xl border border-primary/20 bg-white shadow-2xl"
      >
        <div className="flex items-center gap-2 rounded-t-2xl border-b border-card-border bg-gradient-to-r from-slate-50 to-sky-50 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <span className="ml-1 font-mono text-[11px] text-muted">training_lab.py</span>
        </div>

        <div className="grid sm:grid-cols-2">
          <div className="space-y-2 border-b border-card-border p-4 sm:border-b-0 sm:border-r">
            {lines.map((line, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="w-4 shrink-0 text-right font-mono text-[10px] text-muted/60">
                  {i + 1}
                </span>
                <span className="font-mono text-[11px]" style={{ color: line.color }}>
                  {line.text}
                </span>
              </div>
            ))}
            <div className="mt-3 flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span className="font-mono text-[10px] font-semibold text-green-700">
                Training complete · 94.2% accuracy
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-4">
            <p className="mb-3 font-display text-[10px] font-bold uppercase tracking-wider text-primary">
              Model Performance
            </p>
            <svg viewBox="0 0 120 80" className="h-24 w-full">
              {[28, 45, 38, 62, 55, 74, 68].map((h, i) => (
                <rect
                  key={i}
                  x={8 + i * 16}
                  y={80 - h}
                  width="10"
                  height={h}
                  rx="2"
                  fill="#0066ff"
                  opacity={0.35 + i * 0.08}
                />
              ))}
              <polyline
                points="13,52 29,35 45,42 61,18 77,25 93,6 109,12"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="mt-2 flex gap-2">
              {["Loss ↓", "F1 ↑", "Deploy ✓"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-semibold text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {[
        { icon: TerminalIcon, label: "Python", position: "left-1 top-0 sm:left-2" },
        { icon: BrainIcon, label: "AI/ML", position: "right-1 top-0 sm:right-2" },
        { icon: SearchIcon, label: "RAG", position: "left-0 bottom-0 sm:left-1" },
        { icon: BarChart3Icon, label: "Analytics", position: "right-1 bottom-0 sm:right-2" },
      ].map((chip, i) => (
        <motion.div
          key={chip.label}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3.8 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
          className={cn(
            "absolute z-20 flex items-center gap-1.5 rounded-full border border-card-border bg-white px-3 py-1.5 shadow-md",
            chip.position
          )}
        >
          <chip.icon size={14} className="text-primary" />
          <span className="text-[10px] font-semibold text-foreground">{chip.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

const VARIANTS: Record<TrainingVisualVariant, () => React.ReactNode> = {
  "skills-hub": SkillsHubVisual,
  "learning-path": LearningPathVisual,
  "lab-bench": LabBenchVisual,
};

export function TrainingHubVisual({
  variant = "skills-hub",
  className,
}: TrainingHubVisualProps) {
  const Visual = VARIANTS[variant];

  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-xl lg:max-w-2xl",
        variant === "learning-path" ? "aspect-square min-h-[380px] sm:min-h-[440px]" : "min-h-[400px] sm:min-h-[460px]",
        className
      )}
      aria-hidden="true"
    >
      <VisualGlow />
      <Visual />
    </div>
  );
}
