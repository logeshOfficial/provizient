"use client";

import { motion } from "framer-motion";
import { HeroVisualShell } from "@/components/marketing/hero-visual-shell";
import { COMPANY_STATS } from "@/lib/constants";
import {
  UsersIcon,
  SparklesIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  BrainIcon,
  AwardIcon,
} from "@/components/icons/provizient-icons";

const TEAM_STATS = [
  { value: COMPANY_STATS.aiExperts,  label: "AI Experts",  color: "from-primary to-primary/80" },
  { value: COMPANY_STATS.countries,  label: "Countries",   color: "from-accent to-accent/80"   },
];

const PILLARS = [
  { icon: BrainIcon,      label: "AI Research",      color: "text-primary",   bg: "bg-primary/10"   },
  { icon: UsersIcon,      label: "Expert Team",       color: "text-accent",    bg: "bg-accent/10"    },
  { icon: SparklesIcon,   label: "Innovation",        color: "text-violet-500", bg: "bg-violet-50"   },
  { icon: ShieldCheckIcon, label: "Integrity",        color: "text-green-600", bg: "bg-green-50"     },
  { icon: TrendingUpIcon, label: "Growth",            color: "text-orange-500", bg: "bg-orange-50"   },
  { icon: AwardIcon,      label: "Excellence",        color: "text-yellow-600", bg: "bg-yellow-50"   },
];

export function AboutHeroVisual() {
  return (
    <HeroVisualShell glow="accent">
      {/* Subtle rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/15"
      />

      <div
        className="relative z-20 flex w-full flex-col gap-3"
        style={{ transform: "translateZ(28px)" }}
      >
        {/* Top badge chips */}
        <div className="flex items-start justify-between gap-2">
          {TEAM_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            >
              <div className={`bg-gradient-to-br ${stat.color} rounded-xl px-3 py-1.5 shadow-xl border border-white/15`}>
                <p className="text-[13px] font-bold text-white leading-tight">{stat.value}</p>
                <p className="text-[10px] text-white/80">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main card — Company profile style */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          className="w-full rounded-2xl border border-primary/20 bg-card shadow-[0_20px_50px_rgba(0,102,255,0.12)] overflow-hidden"
        >
          {/* Card header bar */}
          <div className="flex items-center gap-2 border-b border-slate-700 bg-gradient-to-r from-primary to-accent px-4 py-2.5 sm:px-5 sm:py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-card/40 sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-card/40 sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-card/40 sm:h-3 sm:w-3" />
            <span className="ml-1 font-mono text-[10px] tracking-widest uppercase text-white/80 sm:text-[11px]">
              ProVizient · Company Profile
            </span>
            <div className="ml-auto flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-card" />
              <span className="text-[10px] font-bold text-white">EST. {COMPANY_STATS.foundedYear}</span>
            </div>
          </div>

          {/* Company stats row */}
          <div className="grid grid-cols-3 divide-x divide-slate-700 border-b border-slate-700">
            {[
              { value: COMPANY_STATS.valueCreated,       label: "Value Created" },
              { value: COMPANY_STATS.projectsDone,       label: "Projects Done" },
              { value: COMPANY_STATS.clientSatisfaction, label: "Client Rate"   },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center py-3 px-2">
                <span className="font-display text-sm font-bold text-foreground sm:text-base">{item.value}</span>
                <span className="text-[9px] text-muted sm:text-[10px]">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Pillars grid */}
          <div className="grid grid-cols-3 gap-2 p-3 sm:p-4">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.label}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3.5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                className={`flex flex-col items-center gap-1 rounded-xl border border-slate-700 ${pillar.bg} px-2 py-2.5`}
              >
                <pillar.icon size={16} className={pillar.color} />
                <span className="text-center text-[9px] font-semibold text-foreground leading-tight sm:text-[10px]">
                  {pillar.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom stat chips */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "AI Consulting", sub: "Enterprise · SMB", color: "from-secondary to-secondary/80" },
            { label: "AI Training", sub: "Programs · Certs", color: "from-slate-700 to-slate-800" },
          ].map((chip, i) => (
            <motion.div
              key={chip.label}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: 0.8 + i * 0.3 }}
              className="rounded-xl border border-card-border bg-card/95 p-2.5 shadow-lg sm:p-3"
            >
              <div className={`inline-block rounded-full bg-gradient-to-br ${chip.color} w-2 h-2 mb-1`} />
              <p className="font-display text-[10px] font-bold uppercase tracking-wider text-foreground sm:text-[11px]">
                {chip.label}
              </p>
              <p className="text-[9px] text-muted sm:text-[10px]">{chip.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </HeroVisualShell>
  );
}


