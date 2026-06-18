"use client";

import { useId } from "react";

/** Option 2 — Floating hologram bot with orbit ring */
export function AgentOption2() {
  const uid = useId().replace(/:/g, "");

  return (
    <div className="relative mx-auto flex h-[300px] w-full max-w-[320px] items-center justify-center">
      <div className="absolute inset-0 rounded-full border border-primary/20 bg-primary/5" />
      <div className="absolute h-56 w-56 rounded-full border border-dashed border-primary/30 animate-[spin_20s_linear_infinite]" />
      <svg viewBox="0 0 240 260" className="relative z-10 w-[200px]" aria-hidden>
        <defs>
          <linearGradient id={`o2-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0066ff" />
            <stop offset="100%" stopColor="#00a3e0" />
          </linearGradient>
        </defs>
        <ellipse cx="120" cy="230" rx="70" ry="12" fill="#0066ff" opacity="0.15" />
        <rect x="70" y="40" width="100" height="90" rx="28" fill="#fff" stroke="#e2e8f0" strokeWidth="2" />
        <rect x="82" y="58" width="76" height="32" rx="10" fill={`url(#o2-${uid})`} />
        <g className="robot-eye">
          <circle cx="102" cy="74" r="6" fill="#fff" />
          <circle cx="138" cy="74" r="6" fill="#fff" />
        </g>
        <path d="M95 108 Q120 122 145 108" stroke="#0f172a" strokeWidth="3" fill="none" strokeLinecap="round" />
        <rect x="88" y="138" width="64" height="70" rx="20" fill="#fff" stroke="#e2e8f0" strokeWidth="2" />
        <circle cx="120" cy="172" r="18" fill="#eff6ff" stroke="#0066ff" strokeWidth="2" />
        <circle cx="120" cy="172" r="7" fill="#0066ff" className="agent-pulse-dot" />
      </svg>
      <p className="absolute bottom-2 text-[10px] font-bold uppercase tracking-widest text-primary">
        Hologram Agent
      </p>
    </div>
  );
}
