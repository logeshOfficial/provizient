"use client";

import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  simplified?: boolean;
}

export function Logo({ className = "", simplified = false }: LogoProps) {
  if (simplified) {
    return (
      <svg
        width="180"
        height="48"
        viewBox="0 0 180 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Hexagon Icon with P */}
        <g>
          <motion.path
            d="M20 6L30 11V21L20 26L10 21V11L20 6Z"
            stroke="url(#logoGrad)"
            strokeWidth="2"
            fill="rgba(59, 130, 246, 0.08)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <path
            d="M16 13H19C20.7 13 22 14.3 22 16C22 17.7 20.7 19 19 19H16V22"
            stroke="#f1f5f9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="16" cy="13" r="1.2" fill="#f1f5f9" />
        </g>

        {/* Brand Text */}
        <text
          x="38"
          y="20"
          fontFamily="'Space Grotesk', sans-serif"
          fontSize="18"
          fontWeight="800"
          fill="#f1f5f9"
          letterSpacing="-0.3"
        >
          ProVizient
        </text>

        <text
          x="38"
          y="30"
          fontFamily="'Inter', sans-serif"
          fontSize="7"
          fontWeight="600"
          letterSpacing="1.2"
          fill="#64748b"
        >
          AI TRAINING • CONSULTING
        </text>

        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      width="240"
      height="60"
      viewBox="0 0 240 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Hexagon with Neural Network */}
      <g transform="translate(6, 8)">
        {/* Outer Hexagon */}
        <motion.path
          d="M24 4L38 12V28L24 36L10 28V12L24 4Z"
          stroke="url(#hexGrad)"
          strokeWidth="2"
          fill="rgba(59, 130, 246, 0.05)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Central AI Core */}
        <motion.circle
          cx="24"
          cy="20"
          r="6"
          stroke="url(#coreGrad)"
          strokeWidth="1.5"
          fill="none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.circle
          cx="24"
          cy="20"
          r="3"
          fill="url(#coreGrad)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />

        {/* Neural Nodes */}
        <motion.circle
          cx="16"
          cy="14"
          r="2"
          fill="#3b82f6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7 }}
        />
        <motion.circle
          cx="32"
          cy="14"
          r="2"
          fill="#06b6d4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8 }}
        />
        <motion.circle
          cx="16"
          cy="26"
          r="2"
          fill="#8b5cf6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9 }}
        />
        <motion.circle
          cx="32"
          cy="26"
          r="2"
          fill="#3b82f6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.0 }}
        />

        {/* Connection Lines */}
        <line x1="18" y1="15" x2="22" y2="18" stroke="#3b82f6" strokeWidth="1" opacity="0.5" />
        <line x1="30" y1="15" x2="26" y2="18" stroke="#06b6d4" strokeWidth="1" opacity="0.5" />
        <line x1="18" y1="25" x2="22" y2="22" stroke="#8b5cf6" strokeWidth="1" opacity="0.5" />
        <line x1="30" y1="25" x2="26" y2="22" stroke="#3b82f6" strokeWidth="1" opacity="0.5" />
      </g>

      {/* Brand Text */}
      <g transform="translate(54, 16)">
        <text
          x="0"
          y="18"
          fontFamily="'Space Grotesk', sans-serif"
          fontSize="22"
          fontWeight="800"
          fill="#f1f5f9"
          letterSpacing="-0.5"
        >
          Pro
        </text>
        <text
          x="40"
          y="18"
          fontFamily="'Space Grotesk', sans-serif"
          fontSize="22"
          fontWeight="800"
          fill="url(#textGrad)"
          letterSpacing="-0.5"
        >
          Vizient
        </text>

        <text
          x="0"
          y="32"
          fontFamily="'Inter', sans-serif"
          fontSize="8"
          fontWeight="600"
          letterSpacing="1.5"
          fill="#64748b"
        >
          AI TRAINING • SOFTWARE • CONSULTING
        </text>
      </g>

      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>

        <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>

        <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  );
}
