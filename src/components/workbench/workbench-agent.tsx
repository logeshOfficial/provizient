"use client";

import { motion } from "framer-motion";

export function WorkbenchAgent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="workbench-agent relative mx-auto w-full max-w-[440px]"
    >
      <div className="workbench-agent-ring workbench-agent-ring-outer" aria-hidden="true" />
      <div className="workbench-agent-ring workbench-agent-ring-inner" aria-hidden="true" />
      <div className="workbench-agent-glow" aria-hidden="true" />

      <svg
        viewBox="0 0 440 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full drop-shadow-2xl"
        role="img"
        aria-label="AI training agent"
      >
        <defs>
          <linearGradient id="wbBody" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e8f4ff" />
          </linearGradient>
          <linearGradient id="wbVisor" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066ff" />
            <stop offset="100%" stopColor="#00a3e0" />
          </linearGradient>
          <filter id="wbGlow">
            <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#0066ff" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* Floating platform */}
        <ellipse cx="220" cy="318" rx="118" ry="18" fill="#0066ff" opacity="0.12" />
        <ellipse cx="220" cy="312" rx="92" ry="10" fill="#0066ff" opacity="0.2" />

        {/* Portal frame */}
        <circle cx="220" cy="168" r="128" stroke="#0066ff" strokeWidth="1.5" opacity="0.15" />
        <circle cx="220" cy="168" r="108" stroke="#00a3e0" strokeWidth="1" strokeDasharray="8 10" opacity="0.35" />

        {/* Side training nodes */}
        <g opacity="0.9">
          <rect x="36" y="128" width="54" height="54" rx="12" fill="#f5f3ff" stroke="#8b5cf6" strokeWidth="1.5" />
          <text x="63" y="152" textAnchor="middle" fill="#7c3aed" fontSize="11" fontWeight="700">AI</text>
          <text x="63" y="168" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="600">TRAIN</text>

          <rect x="350" y="128" width="54" height="54" rx="12" fill="#ecfdf5" stroke="#22c55e" strokeWidth="1.5" />
          <text x="377" y="152" textAnchor="middle" fill="#16a34a" fontSize="11" fontWeight="700">DEV</text>
          <text x="377" y="168" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="600">BUILD</text>
        </g>

        <path d="M90 155 H136 M304 155 H350" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" />

        {/* Main robot body */}
        <g filter="url(#wbGlow)">
          {/* Head */}
          <rect x="158" y="72" width="124" height="108" rx="34" fill="url(#wbBody)" stroke="#cbd5e1" strokeWidth="2" />
          {/* Visor */}
          <rect x="172" y="96" width="96" height="44" rx="14" fill="url(#wbVisor)" />
          <rect x="182" y="106" width="30" height="8" rx="4" fill="#ffffff" opacity="0.35" className="workbench-scan" />
          {/* Eyes in visor */}
          <g className="robot-eye">
            <rect x="188" y="114" width="18" height="18" rx="5" fill="#ffffff" />
            <rect x="194" y="120" width="6" height="6" rx="2" fill="#0f172a" />
          </g>
          <g className="robot-eye robot-eye-delay">
            <rect x="234" y="114" width="18" height="18" rx="5" fill="#ffffff" />
            <rect x="240" y="120" width="6" height="6" rx="2" fill="#0f172a" />
          </g>
          {/* Antenna */}
          <rect x="212" y="52" width="16" height="24" rx="5" fill="#e2e8f0" stroke="#cbd5e1" />
          <circle cx="220" cy="46" r="8" fill="#8b5cf6" className="agent-pulse-dot" />

          {/* Neck */}
          <rect x="202" y="180" width="36" height="14" rx="4" fill="#dbeafe" />

          {/* Torso */}
          <path
            d="M148 194 H292 V272 C292 286 278 296 220 296 C162 296 148 286 148 272 Z"
            fill="url(#wbBody)"
            stroke="#cbd5e1"
            strokeWidth="2"
          />
          {/* Core panel */}
          <rect x="188" y="214" width="64" height="52" rx="14" fill="#eff6ff" stroke="#0066ff" strokeWidth="2" />
          <circle cx="220" cy="240" r="16" fill="#0066ff" opacity="0.15" />
          <path
            d="M220 228 L226 242 L212 242 Z"
            fill="#0066ff"
            className="agent-pulse-dot"
          />

          {/* Arms */}
          <rect x="118" y="202" width="28" height="72" rx="14" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          <rect x="294" y="202" width="28" height="72" rx="14" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="132" cy="282" r="12" fill="#0066ff" opacity="0.85" />
          <circle cx="308" cy="282" r="12" fill="#00a3e0" opacity="0.85" />
        </g>

        {/* Badge */}
        <rect x="168" y="322" width="104" height="28" rx="14" fill="#0f172a" />
        <text
          x="220"
          y="340"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="11"
          fontWeight="700"
          letterSpacing="0.18em"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          TRAINING AGENT
        </text>
      </svg>
    </motion.div>
  );
}
