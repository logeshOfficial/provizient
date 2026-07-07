"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/provizient-icons";
import { PerspectiveDeck } from "@/components/workbench/perspective-deck";
import { RobotChip } from "@/components/workbench/robot-chip";
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
    <section className="relative overflow-hidden pt-24 pb-8 sm:pt-24 sm:pb-10 lg:pt-24 lg:pb-12">
      <PerspectiveDeck />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 sm:mb-8 flex justify-center">
            <RobotChip variant="default" animate={false} />
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground break-words">
            Discover{" "}
            <span className="gradient-text">AI Training</span>
            <br className="hidden sm:block" />
            {" "}That Turn Ideas Into Action
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base lg:text-lg text-muted leading-relaxed">
            Production-ready learning paths and software consulting designed to
            accelerate real career growth and business outcomes.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollToCatalog("training")}
              className={cn(
                "inline-flex w-full sm:w-auto sm:min-w-[200px] items-center justify-center rounded-lg px-8 py-4 text-base font-semibold transition-all min-h-[44px]",
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
                "inline-flex w-full sm:w-auto sm:min-w-[200px] items-center justify-center rounded-lg border-2 px-8 py-4 text-base font-semibold transition-all min-h-[44px]",
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
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Talk with our experts
            <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
