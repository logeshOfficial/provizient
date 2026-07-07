"use client";

import { cn } from "@/lib/utils";
import { SkillsHubVisual } from "./skills-hub-visual";
import { LearningPathVisual } from "./learning-path-visual";
import { LabBenchVisual } from "./lab-bench-visual";

export const PROGRAM_COLORS: Record<string, string> = {
  purple: "#a855f7",
  blue: "#0066ff",
  green: "#22c55e",
  yellow: "#eab308",
  orange: "#f97316",
};

export type TrainingVisualVariant = "skills-hub" | "learning-path" | "lab-bench";

type TrainingHubVisualProps = {
  variant?: TrainingVisualVariant;
  className?: string;
};

function VisualGlow({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0", className)}>
      <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-8 top-1/4 h-40 w-40 rounded-full bg-secondary/10 blur-2xl" />
      <div className="absolute -left-6 bottom-1/4 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
    </div>
  );
}

const VARIANTS: Record<TrainingVisualVariant, () => React.ReactNode> = {
  "skills-hub": SkillsHubVisual,
  "learning-path": LearningPathVisual,
  "lab-bench": LabBenchVisual,
};

export function TrainingHubVisual({
  variant = "skills-hub",
  className,
}: TrainingHubVisualProps) {
  const Visual = VARIANTS[variant];

  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-xl lg:max-w-2xl",
        variant === "learning-path" ? "aspect-square min-h-[380px] sm:min-h-[440px]" : "min-h-[400px] sm:min-h-[460px]",
        className
      )}
      aria-hidden="true"
    >
      <VisualGlow />
      <Visual />
    </div>
  );
}
