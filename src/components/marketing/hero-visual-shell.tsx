"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type HeroVisualShellProps = {
  children: React.ReactNode;
  glow?: "primary" | "secondary" | "accent";
  className?: string;
};

export function HeroVisualShell({
  children,
  glow = "primary",
  className,
}: HeroVisualShellProps) {
  const glowClass =
    glow === "accent"
      ? "bg-accent/10"
      : glow === "secondary"
        ? "bg-secondary/10"
        : "bg-primary/10";

  return (
    <div
      className={cn("hero-visual-wrap h-full w-full", className)}
      aria-hidden="true"
    >
      <div className={cn("absolute inset-0 rounded-full blur-3xl", glowClass)} />
      <div className="hero-visual-stage relative z-10 h-full min-h-0">
        <motion.div
          initial={{ opacity: 0, y: 28, rotateX: 12, rotateY: -16 }}
          animate={{ opacity: 1, y: 0, rotateX: 8, rotateY: -14 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="hero-visual-scene"
        >
          <div className="hero-visual-platform">
            <svg
              className="absolute inset-0 h-full w-full opacity-30"
              viewBox="0 0 400 120"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="hero-platform-grid"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 20 0 L 0 0 0 20"
                    fill="none"
                    stroke="#0066ff"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="400" height="120" fill="url(#hero-platform-grid)" />
            </svg>
          </div>
          <div className="hero-visual-content relative z-10 w-full px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
