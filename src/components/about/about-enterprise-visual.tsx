"use client";

import { motion } from "framer-motion";
import { HeroVisualShell } from "@/components/marketing/hero-visual-shell";

const STATS = [
  { value: "2018", label: "Founded", x: "10%", y: "14%", delay: 0 },
  { value: "200+", label: "Experts", x: "64%", y: "10%", delay: 0.2 },
  { value: "30+", label: "Countries", x: "66%", y: "48%", delay: 0.4 },
  { value: "$2B+", label: "Value", x: "8%", y: "50%", delay: 0.6 },
];

const NODES = [
  { cx: 100, cy: 100, r: 5, color: "#0066ff" },
  { cx: 55, cy: 65, r: 3.5, color: "#00a3e0" },
  { cx: 145, cy: 60, r: 3.5, color: "#6366f1" },
  { cx: 155, cy: 115, r: 3.5, color: "#22c55e" },
  { cx: 45, cy: 120, r: 3.5, color: "#f97316" },
  { cx: 100, cy: 45, r: 3.5, color: "#0066ff" },
];

const EDGES: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [1, 5], [2, 5],
];

export function AboutEnterpriseVisual() {
  return (
    <HeroVisualShell glow="accent">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-[8%] h-[52%] w-[52%] -translate-x-1/2 rounded-full border border-dashed border-primary/15"
      />

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-[12%] w-[54%] -translate-x-1/2 rounded-xl border border-primary/20 bg-white shadow-lg"
      >
        <div className="rounded-t-xl bg-gradient-to-r from-primary to-secondary px-3 py-2">
          <p className="text-center font-display text-[9px] font-bold uppercase tracking-[0.16em] text-white">
            Enterprise AI Hub
          </p>
        </div>
        <div className="p-2">
          <svg viewBox="0 0 200 140" className="mx-auto h-20 w-full">
            {EDGES.map(([a, b], i) => (
              <line
                key={i}
                x1={NODES[a].cx}
                y1={NODES[a].cy}
                x2={NODES[b].cx}
                y2={NODES[b].cy}
                stroke="#0066ff"
                strokeWidth="1"
                opacity="0.22"
              />
            ))}
            {NODES.map((node, i) => (
              <circle key={i} cx={node.cx} cy={node.cy} r={node.r} fill={node.color} />
            ))}
            <circle cx="100" cy="100" r="16" fill="#0066ff" opacity="0.1" stroke="#0066ff" strokeWidth="1.5" />
            <text x="100" y="98" textAnchor="middle" fill="#0066ff" fontSize="10" fontWeight="700">
              AI
            </text>
            <text x="100" y="110" textAnchor="middle" fill="#64748b" fontSize="7">
              Excellence
            </text>
          </svg>
        </div>
      </motion.div>

      {STATS.map((stat) => (
        <motion.div
          key={stat.label}
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 4 + stat.delay * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: stat.delay,
          }}
          className="absolute rounded-lg border border-card-border bg-white/95 px-2 py-1.5 shadow-md"
          style={{ left: stat.x, top: stat.y }}
        >
          <p className="font-display text-xs font-bold text-foreground">{stat.value}</p>
          <p className="text-[8px] font-medium uppercase tracking-wide text-muted">
            {stat.label}
          </p>
        </motion.div>
      ))}

      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[16%] left-[16%] rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-[9px] font-semibold text-green-700"
      >
        Integrity
      </motion.div>
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute bottom-[17%] right-[14%] rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[9px] font-semibold text-blue-700"
      >
        Impact
      </motion.div>
    </HeroVisualShell>
  );
}
