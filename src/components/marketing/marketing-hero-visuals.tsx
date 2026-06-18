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
            className="max-w-[45%] rounded-xl border border-card-border bg-white/95 p-2.5 shadow-md sm:p-3"
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
            className="rounded-full border border-accent/30 bg-white px-3 py-1.5 text-[10px] font-semibold text-accent shadow-md sm:px-4 sm:py-2 sm:text-[11px]"
          >
            Insights
          </motion.span>
        </div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-full rounded-2xl border border-primary/20 bg-white shadow-xl"
        >
          <div className="rounded-t-2xl bg-gradient-to-r from-primary to-accent px-4 py-2.5 sm:px-5 sm:py-3">
            <p className="text-center font-display text-[10px] font-bold uppercase tracking-wider text-white sm:text-xs">
              Thought Leadership
            </p>
          </div>
          <div className="space-y-2.5 p-3 sm:space-y-3 sm:p-4">
            {ARTICLES.map((card, i) => (
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

export function ContactConnectVisual() {
  const chips = [
    { label: "Email", color: "text-primary" },
    { label: "Phone", color: "text-secondary" },
    { label: "Office", color: "text-accent" },
    { label: "Hours", color: "text-green-600" },
  ];

  return (
    <HeroVisualShell glow="secondary">
      <div className={gridShell} style={gridDepth}>
        <div className="grid grid-cols-2 gap-3">
          {chips.slice(0, 2).map((chip, i) => (
            <motion.div
              key={chip.label}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.8 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
              className={i === 1 ? "justify-self-end" : ""}
            >
              <div className="rounded-xl border border-card-border bg-white/95 px-3 py-2 shadow-md sm:px-4 sm:py-2.5">
                <p className={`text-[10px] font-bold sm:text-[11px] ${chip.color}`}>{chip.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-full rounded-2xl border border-primary/20 bg-white shadow-xl"
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
          {chips.slice(2).map((chip, i) => (
            <motion.div
              key={chip.label}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className={i === 1 ? "justify-self-end" : ""}
            >
              <div className="rounded-xl border border-card-border bg-white/95 px-3 py-2 shadow-md sm:px-4 sm:py-2.5">
                <p className={`text-[10px] font-bold sm:text-[11px] ${chip.color}`}>{chip.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </HeroVisualShell>
  );
}

export function CaseStudiesVisual() {
  const bars = [72, 48, 88, 58];

  return (
    <HeroVisualShell>
      <div className={gridShell} style={gridDepth}>
        <motion.span
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="self-start rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-[10px] font-semibold text-green-700 sm:px-4 sm:text-[11px]"
        >
          Success
        </motion.span>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-full rounded-2xl border border-primary/20 bg-white shadow-xl"
        >
          <div className="rounded-t-2xl bg-gradient-to-r from-green-500 to-primary px-4 py-2.5 sm:px-5 sm:py-3">
            <p className="text-center font-display text-[10px] font-bold uppercase tracking-wider text-white sm:text-xs">
              Proven Results
            </p>
          </div>
          <div className="p-3 sm:p-4">
            <div className="mb-3 flex items-end justify-between gap-2">
              {bars.map((h, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-md bg-gradient-to-t from-primary to-secondary"
                    style={{ height: `${h}px` }}
                  />
                  <span className="text-[8px] text-muted sm:text-[9px]">Q{i + 1}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div className="rounded-lg bg-green-50 px-2 py-2 text-center sm:px-3 sm:py-2.5">
                <p className="text-sm font-bold text-green-700 sm:text-base">40%</p>
                <p className="text-[8px] text-green-600 sm:text-[9px]">Fraud reduction</p>
              </div>
              <div className="rounded-lg bg-blue-50 px-2 py-2 text-center sm:px-3 sm:py-2.5">
                <p className="text-sm font-bold text-blue-700 sm:text-base">3x</p>
                <p className="text-[8px] text-blue-600 sm:text-[9px]">Faster diagnosis</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </HeroVisualShell>
  );
}

export function IndustriesVisual() {
  const sectors = [
    { label: "Finance", color: "#0066ff" },
    { label: "Health", color: "#22c55e" },
    { label: "Energy", color: "#eab308" },
    { label: "Mfg", color: "#f97316" },
    { label: "Retail", color: "#6366f1" },
  ];

  return (
    <HeroVisualShell glow="accent">
      <div className={gridShell} style={gridDepth}>
        <div className="flex justify-center">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-full border border-card-border bg-white px-4 py-1.5 shadow-md"
          >
            <span
              className="mr-1.5 inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: sectors[0].color }}
            />
            <span className="text-[10px] font-semibold text-foreground sm:text-[11px]">
              {sectors[0].label}
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3">
          <div className="flex flex-col gap-2 sm:gap-3">
            {[sectors[3], sectors[4]].map((s) => (
              <motion.div
                key={s.label}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-full border border-card-border bg-white px-3 py-1.5 shadow-md sm:px-4"
              >
                <span className="mr-1 inline-block h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} />
                <span className="text-[10px] font-semibold sm:text-[11px]">{s.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-2xl border-2 border-primary bg-white shadow-lg sm:h-32 sm:w-32"
          >
            <span className="font-display text-xl font-bold text-primary sm:text-2xl">AI</span>
            <span className="text-[10px] font-medium text-muted sm:text-xs">Hub</span>
          </motion.div>

          <div className="flex flex-col items-end gap-2 sm:gap-3">
            {[sectors[1], sectors[2]].map((s) => (
              <motion.div
                key={s.label}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-full border border-card-border bg-white px-3 py-1.5 shadow-md sm:px-4"
              >
                <span className="mr-1 inline-block h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} />
                <span className="text-[10px] font-semibold sm:text-[11px]">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </HeroVisualShell>
  );
}

export function ConsultationVisual() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const slots = [true, true, false, true, true];

  return (
    <HeroVisualShell glow="secondary">
      <div className={gridShell} style={gridDepth}>
        <div className="flex items-start justify-between gap-2">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
            className="max-w-[48%] rounded-xl border border-card-border bg-white/95 p-2.5 shadow-md sm:p-3"
          >
            <p className="text-[10px] font-semibold text-primary">Expert match</p>
            <p className="mt-0.5 text-[9px] text-muted">AI strategist assigned</p>
          </motion.div>
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-full border border-primary/30 bg-white px-3 py-1.5 text-[10px] font-semibold text-primary shadow-md sm:px-4 sm:text-[11px]"
          >
            Free 60 min
          </motion.span>
        </div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-full rounded-2xl border border-primary/20 bg-white shadow-xl"
        >
          <div className="rounded-t-2xl border-b border-card-border bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2.5 sm:px-5 sm:py-3">
            <p className="font-display text-[10px] font-bold uppercase tracking-wider text-primary sm:text-xs">
              Strategy Session
            </p>
          </div>
          <div className="p-3 sm:p-4">
            <div className="mb-3 grid grid-cols-5 gap-1">
              {days.map((day, i) => (
                <div key={day} className="text-center">
                  <p className="text-[8px] text-muted sm:text-[9px]">{day}</p>
                  <div
                    className={`mt-1 rounded-md py-2 text-[9px] font-bold sm:py-2.5 sm:text-[10px] ${
                      slots[i] ? "bg-primary text-white" : "bg-surface text-muted"
                    }`}
                  >
                    {8 + i}:00
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              {["AI readiness review", "Opportunity mapping", "Expert guidance"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-lg bg-surface px-2.5 py-1.5 sm:px-3 sm:py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 sm:h-2 sm:w-2" />
                  <span className="text-[10px] text-foreground sm:text-[11px]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </HeroVisualShell>
  );
}
