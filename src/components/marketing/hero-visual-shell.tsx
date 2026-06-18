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
      className={cn("hero-visual-wrap", className)}
      aria-hidden="true"
    >
      <div className={cn("absolute inset-0 rounded-full blur-3xl", glowClass)} />
      <div className="hero-visual-stage relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="hero-visual-scene"
        >
          <div className="hero-visual-platform" />
          {children}
        </motion.div>
      </div>
    </div>
  );
}
