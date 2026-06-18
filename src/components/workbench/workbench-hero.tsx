"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PerspectiveDeck } from "@/components/workbench/perspective-deck";
import { WorkbenchAgent } from "@/components/workbench/workbench-agent";
import { cn } from "@/lib/utils";

export type WorkbenchTab = "training" | "consulting";

type WorkbenchHeroProps = {
  activeTab: WorkbenchTab;
  onTabChange: (tab: WorkbenchTab) => void;
};

export function WorkbenchHero({ activeTab, onTabChange }: WorkbenchHeroProps) {
  const scrollToCatalog = (tab: WorkbenchTab) => {
    onTabChange(tab);
    document.getElementById("workbench-catalog")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative min-h-[90vh] overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-24">
      <PerspectiveDeck />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center sm:mb-10">
            <WorkbenchAgent />
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Discover{" "}
            <span className="gradient-text">AI Training</span>
            <br />
            That Turn Ideas Into Action
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Production-ready learning paths and software consulting designed to
            accelerate real career growth and business outcomes.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollToCatalog("training")}
              className={cn(
                "inline-flex min-w-[220px] items-center justify-center rounded-lg px-8 py-4 text-base font-semibold transition-all",
                activeTab === "training"
                  ? "bg-foreground text-white shadow-lg"
                  : "bg-foreground text-white shadow-lg hover:bg-foreground/90"
              )}
            >
              AI Training Programs
            </button>
            <button
              type="button"
              onClick={() => scrollToCatalog("consulting")}
              className={cn(
                "inline-flex min-w-[220px] items-center justify-center rounded-lg border-2 px-8 py-4 text-base font-semibold transition-all",
                activeTab === "consulting"
                  ? "border-foreground bg-white text-foreground shadow-md"
                  : "border-foreground/30 bg-white text-foreground hover:border-foreground hover:shadow-md"
              )}
            >
              Software Consulting
            </button>
          </div>

          <Link
            href="/book-consultation"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Talk with our experts
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
