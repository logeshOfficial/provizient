"use client";

import { useId } from "react";
import { motion } from "framer-motion";

export function WorkbenchAgent() {
  const uid = useId().replace(/:/g, "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="workbench-agent-wrap mx-auto w-full max-w-[400px]"
    >
      <div className="relative px-2 sm:px-0">
        {/* Horizontal circuit lines — full width behind card */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-1/2 z-0 -translate-y-1/2"
          aria-hidden="true"
        >
          <div className="flex items-center">
            <div className="hero-circuit-beam hero-circuit-beam-left flex-1" />
            <div className="w-[46%] shrink-0 sm:w-[42%]" />
            <div className="hero-circuit-beam hero-circuit-beam-right flex-1" />
          </div>
        </div>

        <div className="relative z-10 overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-b from-white to-sky-50/80 p-5 shadow-[0_20px_50px_rgba(0,102,255,0.12)] sm:p-6">
          <div className="workbench-agent-glow pointer-events-none" aria-hidden="true" />

          <svg
            viewBox="0 0 320 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10 mx-auto w-full max-w-[300px]"
            role="img"
            aria-label="AI training agent"
          >
            <defs>
              <linearGradient id={`wb-chip-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f5f3ff" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
              <linearGradient id={`wb-visor-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0066ff" />
                <stop offset="100%" stopColor="#00a3e0" />
              </linearGradient>
            </defs>

            {/* Chip octagon */}
            <path
              d="M88 48 L232 48 L268 84 L268 216 L232 252 L88 252 L52 216 L52 84 Z"
              fill={`url(#wb-chip-${uid})`}
              stroke="#c7d2fe"
              strokeWidth="2"
            />
            <rect x="64" y="68" width="24" height="7" rx="2" fill="#a78bfa" opacity="0.9" />
            <rect x="232" y="68" width="20" height="7" rx="2" fill="#f87171" opacity="0.9" />
            <rect x="64" y="225" width="18" height="7" rx="2" fill="#0066ff" opacity="0.75" />
            <rect x="226" y="225" width="28" height="7" rx="2" fill="#facc15" opacity="0.9" />

            {/* Robot head */}
            <rect x="108" y="78" width="104" height="88" rx="26" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
            <rect x="212" y="52" width="12" height="20" rx="4" fill="#e2e8f0" />
            <circle cx="218" cy="46" r="6" fill="#8b5cf6" className="agent-pulse-dot" />

            {/* Visor */}
            <rect x="120" y="98" width="80" height="36" rx="12" fill={`url(#wb-visor-${uid})`} />
            <g className="robot-eye">
              <rect x="132" y="108" width="14" height="14" rx="4" fill="#ffffff" />
              <rect x="136" y="112" width="6" height="6" rx="1.5" fill="#0f172a" />
            </g>
            <g className="robot-eye robot-eye-delay">
              <rect x="174" y="108" width="14" height="14" rx="4" fill="#ffffff" />
              <rect x="178" y="112" width="6" height="6" rx="1.5" fill="#0f172a" />
            </g>

            {/* Smile */}
            <path
              d="M138 158 Q160 170 182 158"
              stroke="#0f172a"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />

            {/* Body */}
            <rect x="124" y="172" width="72" height="56" rx="18" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
            <circle cx="160" cy="200" r="14" fill="#eff6ff" stroke="#0066ff" strokeWidth="2" />
            <path d="M160 192 L165 204 L155 204 Z" fill="#0066ff" className="agent-pulse-dot" />
          </svg>

          <div className="relative z-10 mt-1 flex justify-center gap-3">
            <span className="rounded-xl border border-violet-200 bg-violet-50 px-3 py-1.5 text-center text-[10px] font-bold leading-tight text-violet-700 sm:text-xs">
              AI
              <span className="mt-0.5 block font-medium text-violet-500">Train</span>
            </span>
            <span className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-center text-[10px] font-bold leading-tight text-emerald-700 sm:text-xs">
              Dev
              <span className="mt-0.5 block font-medium text-emerald-500">Build</span>
            </span>
          </div>
        </div>
      </div>

      {/* Badge outside SVG — full pill, never clipped */}
      <div className="relative z-20 mt-5 flex justify-center">
        <span className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white shadow-lg sm:text-xs">
          Training Agent
        </span>
      </div>
    </motion.div>
  );
}
