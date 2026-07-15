"use client";

import { motion } from "framer-motion";
import {
  TrnAIMLFoundationsIcon,
  BrainIcon,
} from "@/components/icons/provizient-icons";
import { TRAINING_PROGRAMS } from "@/lib/constants";
import { TRAINING_ICON_MAP } from "@/lib/icon-maps";

const PROGRAM_COLORS: Record<string, string> = {
  purple: "#a855f7",
  blue: "#0066ff",
  green: "#22c55e",
  yellow: "#eab308",
  orange: "#f97316",
};

export function LearningPathVisual() {
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
        {nodes.map((node) => (
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
        className="absolute left-1/2 top-[18%] z-10 w-[52%] -translate-x-1/2 rounded-2xl border border-primary/25 bg-slate-900 p-4 shadow-xl"
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
        const Icon = TRAINING_ICON_MAP[node.icon as keyof typeof TRAINING_ICON_MAP] || TrnAIMLFoundationsIcon;
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
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-card shadow-lg"
                style={{ boxShadow: `0 8px 24px ${accent}33` }}
              >
                <Icon size={20} className="shrink-0" />
              </div>
              <span className="rounded-full bg-card/95 px-2 py-0.5 text-[9px] font-bold text-foreground shadow-sm">
                {node.title}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

