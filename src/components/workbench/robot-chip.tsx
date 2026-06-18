"use client";

import { motion } from "framer-motion";

export function RobotChip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="agent-visual relative mx-auto w-full max-w-[420px]"
    >
      <div className="agent-visual-glow" aria-hidden="true" />

      <svg
        viewBox="0 0 420 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full drop-shadow-2xl"
        role="img"
        aria-label="AI agent illustration"
      >
        <defs>
          <linearGradient id="chipFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f0f9ff" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <linearGradient id="chipStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0066ff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#00a3e0" stopOpacity="0.35" />
          </linearGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* Circuit traces — left */}
        <path d="M0 150 H72" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M72 150 H92" stroke="#0066ff" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <circle cx="18" cy="150" r="4" fill="#22c55e" />
        <circle cx="36" cy="150" r="4" fill="#ef4444" />
        <circle cx="54" cy="150" r="4" fill="#0066ff" />

        {/* Circuit traces — right */}
        <path d="M348 150 H420" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M328 150 H348" stroke="#0066ff" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <circle cx="366" cy="150" r="4" fill="#eab308" />
        <circle cx="384" cy="150" r="4" fill="#0066ff" />
        <circle cx="402" cy="150" r="4" fill="#22c55e" />

        {/* Chip body */}
        <path
          d="M118 58 L302 58 L338 94 L338 206 L302 242 L118 242 L82 206 L82 94 Z"
          fill="url(#chipFill)"
          stroke="url(#chipStroke)"
          strokeWidth="2.5"
          filter="url(#softShadow)"
        />
        <path
          d="M102 94 L102 206 M318 94 L318 206 M134 42 L134 58 M286 42 L286 58 M134 242 L134 258 M286 242 L286 258"
          stroke="#cbd5e1"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Inner circuit board lines */}
        <path d="M98 118 H118 M322 118 H342 M98 182 H118 M322 182 H342" stroke="#94a3b8" strokeWidth="1.5" opacity="0.6" />
        <rect x="108" y="72" width="28" height="8" rx="2" fill="#4ade80" opacity="0.85" />
        <rect x="284" y="72" width="22" height="8" rx="2" fill="#f87171" opacity="0.85" />
        <rect x="108" y="220" width="20" height="8" rx="2" fill="#0066ff" opacity="0.7" />
        <rect x="278" y="220" width="32" height="8" rx="2" fill="#facc15" opacity="0.85" />

        {/* Robot group */}
        <g filter="url(#softShadow)">
          {/* Antenna */}
          <rect x="203" y="88" width="14" height="22" rx="4" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
          <circle cx="210" cy="82" r="7" fill="#ef4444" className="agent-pulse-dot" />

          {/* Head */}
          <rect x="148" y="108" width="124" height="96" rx="28" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />

          {/* Ears */}
          <rect x="132" y="138" width="16" height="36" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
          <rect x="272" y="138" width="16" height="36" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />

          {/* Eyes */}
          <g className="robot-eye">
            <ellipse cx="182" cy="148" rx="11" ry="13" fill="#0f172a" />
            <circle cx="185" cy="144" r="3.5" fill="#ffffff" opacity="0.9" />
          </g>
          <g className="robot-eye robot-eye-delay">
            <ellipse cx="238" cy="148" rx="11" ry="13" fill="#0f172a" />
            <circle cx="241" cy="144" r="3.5" fill="#ffffff" opacity="0.9" />
          </g>

          {/* Smile */}
          <path
            d="M178 178 Q210 196 242 178"
            stroke="#0f172a"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Neck */}
          <rect x="198" y="204" width="24" height="10" rx="3" fill="#e2e8f0" />

          {/* Body */}
          <rect x="162" y="214" width="96" height="52" rx="18" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
          <circle cx="210" cy="238" r="14" fill="#eff6ff" stroke="#0066ff" strokeWidth="2" opacity="0.9" />
          <circle cx="210" cy="238" r="6" fill="#0066ff" className="agent-pulse-dot" />
        </g>

        {/* Label */}
        <text
          x="210"
          y="285"
          textAnchor="middle"
          className="fill-primary font-display text-[11px] font-bold uppercase tracking-[0.35em]"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          Agentic AI Core
        </text>
      </svg>
    </motion.div>
  );
}
