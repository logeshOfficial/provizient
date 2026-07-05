"use client";

import { motion } from "framer-motion";
import { MessageSquare, BarChart3, Settings, FileText, Cpu } from "lucide-react";

export function HeroBrainVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg aspect-square flex items-center justify-center overflow-visible">
      {/* Radial Background Glows matching current theme */}
      <div className="absolute w-[360px] h-[360px] rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
      <div className="absolute w-[240px] h-[240px] rounded-full bg-secondary/5 blur-2xl animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="relative w-full h-full flex flex-col justify-end items-center pb-8 overflow-visible">
        {/* The Brain Visual and Orbiting Icons */}
        <div className="relative w-full flex-1 flex items-center justify-center overflow-visible">
          {/* Orbit Rings (Perspective Tilted Circles) */}
          <div className="absolute border border-primary/20 rounded-full w-[280px] h-[100px] rotate-[15deg] transform -translate-y-4" />
          <div className="absolute border border-secondary/15 rounded-full w-[340px] h-[120px] -rotate-[10deg] transform -translate-y-4" />

          {/* Floating Orbit Icons */}
          {/* Chat Icon - Top Right */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-[10%] z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white border border-card-border shadow-md"
          >
            <MessageSquare className="h-5 w-5 text-accent" />
          </motion.div>

          {/* Settings Icon - Middle Right */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/2 right-[5%] z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white border border-card-border shadow-md"
          >
            <Settings className="h-5 w-5 text-primary" />
          </motion.div>

          {/* Stats Icon - Bottom Left */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute bottom-1/4 left-[8%] z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white border border-card-border shadow-md"
          >
            <BarChart3 className="h-5 w-5 text-secondary" />
          </motion.div>

          {/* File Icon - Bottom Right */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="absolute bottom-1/4 right-[12%] z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white border border-card-border shadow-md"
          >
            <FileText className="h-5 w-5 text-muted" />
          </motion.div>

          {/* Chip/Cpu Icon - Top Left */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-1/3 left-[5%] z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white border border-card-border shadow-md"
          >
            <Cpu className="h-5 w-5 text-primary" />
          </motion.div>

          {/* Glowing Digital Brain (SVG Layout) */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-[240px] h-[240px]"
          >
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full drop-shadow-[0_0_25px_rgba(0,102,255,0.35)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Brain Left Hemisphere Circuit Lines */}
              <path
                d="M100,50 C70,50 40,70 40,100 C40,120 50,135 60,145 C65,150 70,165 80,165 C85,165 90,160 90,150 C90,145 95,140 100,140"
                stroke="url(#brain-gradient-left)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="4 4"
              />
              <path
                d="M100,70 C80,70 60,82 60,100 C60,115 70,125 80,130 C85,132 90,135 90,140"
                stroke="#0066ff"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Brain Right Hemisphere Circuit Lines */}
              <path
                d="M100,50 C130,50 160,70 160,100 C160,120 150,135 140,145 C135,150 130,165 120,165 C115,165 110,160 110,150 C110,145 105,140 100,140"
                stroke="url(#brain-gradient-right)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="4 4"
              />
              <path
                d="M100,70 C120,70 140,82 140,100 C140,115 130,125 120,130 C115,132 110,135 110,140"
                stroke="#00a3e0"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Circuit Nodes (Dots) */}
              <circle cx="40" cy="100" r="4" fill="#0066ff" className="circuit-dot" />
              <circle cx="160" cy="100" r="4" fill="#00a3e0" className="circuit-dot circuit-dot-delay-1" />
              <circle cx="80" cy="165" r="4" fill="#0066ff" className="circuit-dot circuit-dot-delay-2" />
              <circle cx="120" cy="165" r="4" fill="#00a3e0" className="circuit-dot circuit-dot-delay-3" />
              <circle cx="60" cy="70" r="3" fill="#6366f1" />
              <circle cx="140" cy="70" r="3" fill="#6366f1" />

              {/* Central Glowing AI Text Shield */}
              <rect x="76" y="85" width="48" height="30" rx="6" fill="white" stroke="#0066ff" strokeWidth="2" />
              <text x="100" y="106" fill="#0066ff" fontSize="18" fontWeight="bold" textAnchor="middle" letterSpacing="1">
                AI
              </text>

              {/* Gradients */}
              <defs>
                <linearGradient id="brain-gradient-left" x1="40" y1="50" x2="100" y2="165" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0066ff" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
                <linearGradient id="brain-gradient-right" x1="160" y1="50" x2="100" y2="165" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#00a3e0" />
                  <stop offset="100%" stopColor="#0066ff" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>

        {/* 3D Pedestal/Cylinder at the bottom */}
        <div className="relative w-[280px] h-[50px] overflow-visible">
          {/* Glowing Platform Rings */}
          <div className="absolute inset-x-0 bottom-1 h-8 rounded-full bg-gradient-to-r from-primary to-secondary blur-md opacity-75" />

          {/* Solid Cylindrical Pedestal Platform */}
          <div className="absolute inset-x-0 bottom-0 h-10 rounded-full border border-primary/20 bg-gradient-to-b from-sky-50/90 to-white shadow-xl flex items-center justify-center">
            {/* Top Surface Grid lines */}
            <div className="absolute inset-1 rounded-full border border-dashed border-primary/10" />
            {/* Light beam source effect */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-28 h-20 bg-gradient-to-t from-primary/10 to-transparent blur-md pointer-events-none" />
          </div>

          {/* Accent light rim at bottom */}
          <div className="absolute inset-x-4 bottom-0 h-1 rounded-full bg-primary/40 blur-[1px]" />
        </div>
      </div>
    </div>
  );
}
