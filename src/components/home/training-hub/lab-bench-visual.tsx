"use client";

import { motion } from "framer-motion";
import {
  TerminalIcon,
  BrainIcon,
  SearchIcon,
  BarChart3Icon,
} from "@/components/icons/provizient-icons";
import { cn } from "@/lib/utils";

export function LabBenchVisual() {
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
        className="relative mx-auto w-full rounded-2xl border border-primary/20 bg-slate-900 shadow-2xl"
      >
        <div className="flex items-center gap-2 rounded-t-2xl border-b border-card-border bg-gradient-to-r from-slate-900 to-slate-800 px-4 py-2.5">
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
            "absolute z-20 flex items-center gap-1.5 rounded-full border border-card-border bg-card px-3 py-1.5 shadow-md",
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


