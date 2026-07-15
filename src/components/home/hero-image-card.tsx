"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { assetPath } from "@/lib/utils";
import { HeroVisualShell } from "@/components/marketing/hero-visual-shell";

type FloatingBadge = {
  id: string;
  label: string;
  sub: string;
  color: string;
  position: string;
  delay: number;
};

type HeroImageCardProps = {
  floatingBadges: readonly FloatingBadge[];
};

export function HeroImageCard({ floatingBadges }: HeroImageCardProps) {
  return (
    <HeroVisualShell glow="primary">
      {/* Connection lines */}
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-30"
        viewBox="0 0 400 400"
        aria-hidden="true"
      >
        <path d="M80 320 Q200 240 200 180" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M320 310 Q200 235 200 180" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="200" cy="180" r="4" fill="#3b82f6" className="circuit-dot" />
      </svg>

      {/* Mac-style AI image card — same depth layer as services */}
      <div
        className="relative z-20 flex w-full flex-col"
        style={{ transform: "translateZ(28px)" }}
      >
        {/* Floating badge chips — top row */}
        <div className="mb-3 flex items-start justify-between gap-2">
          {floatingBadges.slice(0, 2).map((badge) => (
            <motion.div
              key={badge.id}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4 + badge.delay, repeat: Infinity, ease: "easeInOut", delay: badge.delay }}
            >
              <div className={`bg-gradient-to-br ${badge.color} rounded-xl px-3 py-1.5 shadow-xl border border-white/15`}>
                <p className="text-[11px] font-bold text-white leading-tight">{badge.label}</p>
                <p className="text-[10px] text-white/75">{badge.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main image card — same style as services code card */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          className="w-full rounded-2xl border border-primary/30 bg-slate-900 shadow-[0_20px_50px_rgba(59,130,246,0.3)] overflow-hidden"
        >
          {/* Titlebar */}
          <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-950 px-4 py-2.5 sm:px-5 sm:py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500 sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500 sm:h-3 sm:w-3" />
            <span className="ml-1 font-mono text-[10px] tracking-widest uppercase text-slate-300 sm:text-[11px]">
              ProVizient AI Platform
            </span>
            <div className="ml-auto flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              <span className="text-[10px] font-bold text-primary">LIVE</span>
            </div>
          </div>

          {/* Image — explicit aspect ratio so it always renders */}
          <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
            <Image
              src={assetPath("/hero-ai-brain.jpg")}
              alt="AI-powered digital brain circuit — ProVizient Solutions"
              fill
              priority
              sizes="(max-width: 640px) 400px, (max-width: 1024px) 480px, 600px"
              className="object-cover object-center"
            />
            {/* Bottom fade into card */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Bottom chips row */}
        <div className="mt-3 grid grid-cols-2 gap-3">
          {floatingBadges.slice(2).map((badge) => (
            <motion.div
              key={badge.id}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.5 + badge.delay, repeat: Infinity, ease: "easeInOut", delay: badge.delay }}
              className="rounded-xl border border-card-border bg-card/95 backdrop-blur-sm p-2.5 shadow-lg sm:p-3"
            >
              <div className={`inline-block rounded-full bg-gradient-to-br ${badge.color} w-2 h-2 mb-1`} />
              <p className="font-display text-[10px] font-bold uppercase tracking-wider text-foreground sm:text-[11px]">
                {badge.label}
              </p>
              <p className="text-[9px] text-muted sm:text-[10px]">{badge.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </HeroVisualShell>
  );
}
