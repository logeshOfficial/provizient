"use client";

import { motion } from "framer-motion";
import { HeroVisualShell } from "@/components/marketing/hero-visual-shell";

const ARTICLES = [
  { tag: "AI Strategy", title: "Enterprise AI Trends" },
  { tag: "Governance", title: "Responsible AI" },
  { tag: "ROI", title: "Measuring GenAI Value" },
];

export function BlogInsightsVisual() {
  return (
    <HeroVisualShell glow="accent">
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-[4%] w-[66%] -translate-x-1/2 rounded-xl border border-primary/20 bg-white shadow-lg"
      >
        <div className="rounded-t-xl bg-gradient-to-r from-primary to-accent px-3 py-1.5">
          <p className="text-center font-display text-[9px] font-bold uppercase tracking-wider text-white">
            Thought Leadership
          </p>
        </div>
        <div className="space-y-2 p-2.5">
          {ARTICLES.map((card, i) => (
            <div
              key={card.title}
              className="rounded-lg border border-card-border bg-surface px-2.5 py-2"
            >
              <span className="rounded-full bg-primary/10 px-1.5 py-0.5 text-[8px] font-semibold text-primary">
                {card.tag}
              </span>
              <p className="mt-0.5 font-display text-[10px] font-bold text-foreground">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] top-[12%] rounded-full border border-accent/30 bg-white px-2 py-1 text-[9px] font-semibold text-accent shadow-sm"
      >
        Insights
      </motion.div>
    </HeroVisualShell>
  );
}

export function ContactConnectVisual() {
  return (
    <HeroVisualShell glow="secondary">
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-[6%] w-[64%] -translate-x-1/2 rounded-xl border border-primary/20 bg-white shadow-lg"
      >
        <div className="rounded-t-xl border-b border-card-border bg-surface px-3 py-2">
          <p className="font-display text-[9px] font-bold uppercase tracking-wider text-primary">
            Get in Touch
          </p>
        </div>
        <div className="space-y-2 p-2.5">
          <div className="rounded-lg bg-primary/5 px-2.5 py-2 text-left">
            <p className="text-[8px] font-semibold uppercase text-muted">Message</p>
            <p className="text-[10px] text-foreground">Tell us about your AI goals...</p>
          </div>
          <div className="flex justify-end">
            <span className="rounded-lg bg-primary px-2.5 py-1 text-[9px] font-semibold text-white">
              Send
            </span>
          </div>
        </div>
      </motion.div>
      {[
        { label: "Email", x: "8%", y: "18%", color: "text-primary" },
        { label: "Phone", x: "68%", y: "14%", color: "text-secondary" },
        { label: "Office", x: "66%", y: "50%", color: "text-accent" },
        { label: "Hours", x: "10%", y: "52%", color: "text-green-600" },
      ].map((chip, i) => (
        <motion.div
          key={chip.label}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3.8 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.12 }}
          className="absolute rounded-lg border border-card-border bg-white/95 px-2 py-1.5 shadow-md"
          style={{ left: chip.x, top: chip.y }}
        >
          <p className={`text-[9px] font-bold ${chip.color}`}>{chip.label}</p>
        </motion.div>
      ))}
    </HeroVisualShell>
  );
}

export function CaseStudiesVisual() {
  const bars = [52, 34, 64, 42];

  return (
    <HeroVisualShell>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-[4%] w-[66%] -translate-x-1/2 rounded-xl border border-primary/20 bg-white shadow-lg"
      >
        <div className="rounded-t-xl bg-gradient-to-r from-green-500 to-primary px-3 py-1.5">
          <p className="text-center font-display text-[9px] font-bold uppercase tracking-wider text-white">
            Proven Results
          </p>
        </div>
        <div className="p-2.5">
          <div className="mb-2 flex items-end justify-between gap-1.5">
            {bars.map((h, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-0.5">
                <div
                  className="w-full rounded-t-md bg-gradient-to-t from-primary to-secondary"
                  style={{ height: `${h}px` }}
                />
                <span className="text-[7px] text-muted">Q{i + 1}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="rounded-md bg-green-50 px-2 py-1 text-center">
              <p className="text-xs font-bold text-green-700">40%</p>
              <p className="text-[7px] text-green-600">Fraud cut</p>
            </div>
            <div className="rounded-md bg-blue-50 px-2 py-1 text-center">
              <p className="text-xs font-bold text-blue-700">3x</p>
              <p className="text-[7px] text-blue-600">Faster DX</p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[12%] top-[16%] rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-[9px] font-semibold text-green-700"
      >
        Success
      </motion.div>
    </HeroVisualShell>
  );
}

export function IndustriesVisual() {
  const sectors = [
    { label: "Finance", color: "#0066ff", x: "50%", y: "10%" },
    { label: "Health", color: "#22c55e", x: "76%", y: "28%" },
    { label: "Mfg", color: "#f97316", x: "70%", y: "54%" },
    { label: "Retail", color: "#6366f1", x: "30%", y: "54%" },
    { label: "Energy", color: "#eab308", x: "22%", y: "28%" },
  ];

  return (
    <HeroVisualShell glow="accent">
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-[26%] h-[4.5rem] w-[4.5rem] -translate-x-1/2 rounded-xl border-2 border-primary bg-white shadow-md"
      >
        <div className="flex h-full flex-col items-center justify-center">
          <span className="font-display text-base font-bold text-primary">AI</span>
          <span className="text-[8px] font-medium text-muted">Hub</span>
        </div>
      </motion.div>
      {sectors.map((sector, i) => (
        <motion.div
          key={sector.label}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4 + i * 0.25, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 }}
          className="absolute -translate-x-1/2 rounded-full border border-card-border bg-white px-2 py-1 shadow-sm"
          style={{ left: sector.x, top: sector.y }}
        >
          <span
            className="mr-1 inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: sector.color }}
          />
          <span className="text-[9px] font-semibold text-foreground">{sector.label}</span>
        </motion.div>
      ))}
      <svg className="absolute inset-0 h-full w-full opacity-15" viewBox="0 0 400 300">
        <circle cx="200" cy="155" r="72" fill="none" stroke="#0066ff" strokeWidth="1" strokeDasharray="5 5" />
      </svg>
    </HeroVisualShell>
  );
}

export function ConsultationVisual() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const slots = [true, true, false, true, true];

  return (
    <HeroVisualShell glow="secondary">
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-[4%] w-[66%] -translate-x-1/2 rounded-xl border border-primary/20 bg-white shadow-lg"
      >
        <div className="rounded-t-xl border-b border-card-border bg-gradient-to-r from-primary/10 to-secondary/10 px-3 py-2">
          <p className="font-display text-[9px] font-bold uppercase tracking-wider text-primary">
            Strategy Session
          </p>
        </div>
        <div className="p-2.5">
          <div className="mb-2 grid grid-cols-5 gap-0.5">
            {days.map((day, i) => (
              <div key={day} className="text-center">
                <p className="text-[7px] text-muted">{day}</p>
                <div
                  className={`mt-0.5 rounded py-1.5 text-[8px] font-bold ${
                    slots[i] ? "bg-primary text-white" : "bg-surface text-muted"
                  }`}
                >
                  {8 + i}:00
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-1">
            {["AI readiness", "Opportunity map", "Expert guidance"].map((item) => (
              <div key={item} className="flex items-center gap-1.5 rounded-md bg-surface px-2 py-1">
                <span className="h-1 w-1 rounded-full bg-green-500" />
                <span className="text-[9px] text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] top-[14%] rounded-full border border-primary/30 bg-white px-2 py-0.5 text-[9px] font-semibold text-primary shadow-sm"
      >
        Free 60 min
      </motion.div>
    </HeroVisualShell>
  );
}
