"use client";

import { motion } from "framer-motion";
import { HeroVisualShell } from "@/components/marketing/hero-visual-shell";
import { StarIcon, QuoteIcon } from "@/components/icons/provizient-icons";
import { COMPANY_STATS } from "@/lib/constants";

const REVIEWS = [
  {
    name: "Sarah M.",
    role: "CTO · FinTech",
    avatar: "SM",
    avatarColor: "from-primary to-accent",
    quote: "ProVizient transformed our data pipelines with production-grade AI. Exceptional team.",
    stars: 5,
    delay: 0,
  },
  {
    name: "James R.",
    role: "VP Eng · Healthcare",
    avatar: "JR",
    avatarColor: "from-secondary to-primary",
    quote: "The LLM solution they built cut our processing time by 70%. Truly remarkable.",
    stars: 5,
    delay: 0.25,
  },
];

const TRUST_BADGES = [
  { label: `${COMPANY_STATS.clientCount} Clients`,              color: "from-primary to-primary/80"  },
  { label: `${COMPANY_STATS.clientSatisfaction} Satisfaction`,  color: "from-green-500 to-green-600" },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} size={11} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );
}

export function TestimonialsHeroVisual() {
  return (
    <HeroVisualShell glow="primary">
      {/* Subtle dashed ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent/15"
      />

      <div
        className="relative z-20 flex w-full flex-col gap-3"
        style={{ transform: "translateZ(28px)" }}
      >
        {/* Top trust badge chips */}
        <div className="flex items-start justify-between gap-2">
          {TRUST_BADGES.map((badge, i) => (
            <motion.div
              key={badge.label}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            >
              <div className={`bg-gradient-to-br ${badge.color} rounded-xl px-3 py-1.5 shadow-xl border border-white/15`}>
                <p className="text-[11px] font-bold text-white leading-tight">{badge.label}</p>
                <p className="text-[10px] text-white/80">Verified Reviews</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main reviews card */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          className="w-full rounded-2xl border border-primary/20 bg-card shadow-[0_20px_50px_rgba(0,102,255,0.12)] overflow-hidden"
        >
          {/* Card titlebar */}
          <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-950 px-4 py-2.5 sm:px-5 sm:py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500 sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500 sm:h-3 sm:w-3" />
            <span className="ml-1 font-mono text-[10px] tracking-widest uppercase text-slate-400 sm:text-[11px]">
              Client Reviews
            </span>
            <div className="ml-auto flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              <span className="text-[10px] font-bold text-green-400">VERIFIED</span>
            </div>
          </div>

          {/* Overall rating strip */}
          <div className="flex items-center justify-between gap-3 border-b border-slate-700 bg-slate-800 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="font-display text-xl font-bold text-foreground">5.0</span>
              <div className="flex flex-col gap-0.5">
                <Stars count={5} />
                <span className="text-[9px] text-muted">Overall Rating</span>
              </div>
            </div>
            <div className="flex items-center gap-1 rounded-full bg-primary/10 border border-primary/20 px-2.5 py-1">
              <QuoteIcon size={10} className="text-primary" />
              <span className="text-[10px] font-semibold text-primary">{COMPANY_STATS.reviewCount} Reviews</span>
            </div>
          </div>

          {/* Review cards */}
          <div className="flex flex-col divide-y divide-slate-700">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={review.name}
                animate={{ x: [0, i % 2 === 0 ? 2 : -2, 0] }}
                transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: review.delay }}
                className="flex gap-3 p-3 sm:p-4"
              >
                {/* Avatar */}
                <div className={`shrink-0 w-8 h-8 rounded-full bg-gradient-to-br ${review.avatarColor} flex items-center justify-center shadow-md`}>
                  <span className="text-[10px] font-bold text-white">{review.avatar}</span>
                </div>
                {/* Content */}
                <div className="flex flex-col gap-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[11px] font-bold text-foreground leading-none">{review.name}</p>
                      <p className="text-[9px] text-muted">{review.role}</p>
                    </div>
                    <Stars count={review.stars} />
                  </div>
                  <p className="text-[10px] text-muted leading-relaxed line-clamp-2">{review.quote}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom stat chips */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Enterprise Trust", sub: "Fortune 500 · SMBs",          color: "from-secondary to-secondary/80" },
            { label: "Global Reach",      sub: `${COMPANY_STATS.countries} Countries`, color: "from-slate-700 to-slate-800"     },
          ].map((chip, i) => (
            <motion.div
              key={chip.label}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: 0.9 + i * 0.3 }}
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


