"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { assetPath } from "@/lib/utils";

type FloatingBadge = {
  id: string;
  label: string;
  sub: string;
  color: string;
  position: string;
  delay: number;
};

type MobileImageCardProps = {
  floatingBadges: readonly FloatingBadge[];
};

export function MobileImageCard({ floatingBadges }: MobileImageCardProps) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Floating badges — top row */}
      <div className="mb-2 flex items-start justify-between gap-2 px-1">
        {floatingBadges.slice(0, 2).map((badge) => (
          <motion.div
            key={badge.id}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: badge.delay }}
          >
            <div className={`bg-gradient-to-br ${badge.color} rounded-lg px-2.5 py-1 shadow-lg border border-white/15`}>
              <p className="text-[10px] font-bold text-white leading-tight">{badge.label}</p>
              <p className="text-[9px] text-white/75">{badge.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main image card — no 3D transforms */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="w-full rounded-xl border border-primary/20 bg-slate-950 shadow-xl overflow-hidden"
      >
        {/* Titlebar */}
        <div className="flex items-center gap-2 border-b border-white/8 bg-slate-900 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="h-2 w-2 rounded-full bg-green-500" />
          <span className="ml-1 font-mono text-[9px] tracking-widest uppercase text-slate-400">
            ProVizient AI Platform
          </span>
          <div className="ml-auto flex items-center gap-1">
            <div className="h-1 w-1 animate-pulse rounded-full bg-primary" />
            <span className="text-[9px] font-bold text-primary">LIVE</span>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
          <Image
            src={assetPath("/hero-ai-brain.jpg")}
            alt="AI-powered digital brain circuit — ProVizient Solutions"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 480px"
            className="object-cover object-center"
          />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* Bottom badges — 2 column grid */}
      <div className="mt-2 grid grid-cols-2 gap-2 px-1">
        {floatingBadges.slice(2).map((badge) => (
          <motion.div
            key={badge.id}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: badge.delay }}
            className="rounded-lg border border-card-border bg-white/95 p-2 shadow-md"
          >
            <div className={`inline-block rounded-full bg-gradient-to-br ${badge.color} w-1.5 h-1.5 mb-0.5`} />
            <p className="font-display text-[9px] font-bold uppercase tracking-wider text-foreground">
              {badge.label}
            </p>
            <p className="text-[8px] text-muted">{badge.sub}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
