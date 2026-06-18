"use client";

import { motion } from "framer-motion";
import { HeroVisualShell } from "@/components/marketing/hero-visual-shell";

const STATS = [
  { value: "2018", label: "Founded" },
  { value: "200+", label: "AI Experts" },
  { value: "30+", label: "Countries" },
  { value: "$2B+", label: "Value Created" },
];

const NODES = [
  { cx: 100, cy: 100, r: 6, color: "#0066ff" },
  { cx: 55, cy: 65, r: 4, color: "#00a3e0" },
  { cx: 145, cy: 60, r: 4, color: "#6366f1" },
  { cx: 155, cy: 115, r: 4, color: "#22c55e" },
  { cx: 45, cy: 120, r: 4, color: "#f97316" },
  { cx: 100, cy: 45, r: 4, color: "#0066ff" },
];

const EDGES: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [1, 5], [2, 5],
];

function StatChip({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-card-border bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm sm:px-4 sm:py-2.5">
      <p className="font-display text-sm font-bold text-foreground sm:text-base">{value}</p>
      <p className="text-[9px] font-medium uppercase tracking-wide text-muted sm:text-[10px]">
        {label}
      </p>
    </div>
  );
}

export function AboutEnterpriseVisual() {
  return (
    <HeroVisualShell glow="accent">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        className="hero-visual-layer-back pointer-events-none absolute left-1/2 top-1/2 h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/20"
      />

      <div
        className="relative z-20 flex h-full w-full flex-col gap-3"
        style={{ transform: "translateZ(28px)" }}
      >
        <div className="grid grid-cols-2 gap-3">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <StatChip {...STATS[0]} />
          </motion.div>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="justify-self-end"
          >
            <StatChip {...STATS[1]} />
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-full rounded-2xl border border-primary/25 bg-white shadow-[0_20px_50px_rgba(0,102,255,0.15)]"
        >
          <div className="rounded-t-2xl bg-gradient-to-r from-primary to-secondary px-4 py-2.5 sm:px-5 sm:py-3">
            <p className="text-center font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white sm:text-xs">
              Enterprise AI Hub
            </p>
          </div>
          <div className="px-3 pt-3 pb-2 sm:px-4 sm:pt-4">
            <svg viewBox="0 0 200 140" className="mx-auto h-24 w-full sm:h-28">
              {EDGES.map(([a, b], i) => (
                <line
                  key={i}
                  x1={NODES[a].cx}
                  y1={NODES[a].cy}
                  x2={NODES[b].cx}
                  y2={NODES[b].cy}
                  stroke="#0066ff"
                  strokeWidth="1.2"
                  opacity="0.25"
                />
              ))}
              {NODES.map((node, i) => (
                <circle
                  key={i}
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r}
                  fill={node.color}
                  className={i === 0 ? "circuit-dot" : `circuit-dot-delay-${(i % 3) + 1}`}
                />
              ))}
              <circle cx="100" cy="100" r="20" fill="#0066ff" opacity="0.12" stroke="#0066ff" strokeWidth="2" />
              <text x="100" y="98" textAnchor="middle" fill="#0066ff" fontSize="12" fontWeight="700">
                AI
              </text>
              <text x="100" y="110" textAnchor="middle" fill="#64748b" fontSize="7">
                Excellence
              </text>
            </svg>
          </div>
          <div className="flex items-center justify-between gap-2 border-t border-card-border px-3 py-2 sm:px-4">
            <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-[10px] font-semibold text-green-700">
              Integrity
            </span>
            <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[10px] font-semibold text-blue-700">
              Impact
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            <StatChip {...STATS[3]} />
          </motion.div>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="justify-self-end"
          >
            <StatChip {...STATS[2]} />
          </motion.div>
        </div>
      </div>
    </HeroVisualShell>
  );
}
