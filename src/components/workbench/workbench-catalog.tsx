"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { WorkbenchTab } from "@/components/workbench/workbench-hero";
import { cn } from "@/lib/utils";
import { WorkbenchTrainingGrid } from "@/components/workbench/workbench-training-grid";
import { WorkbenchConsultingGrid } from "@/components/workbench/workbench-consulting-grid";

type WorkbenchCatalogProps = {
  activeTab: WorkbenchTab;
  onTabChange: (tab: WorkbenchTab) => void;
};

export function WorkbenchCatalog({ activeTab, onTabChange }: WorkbenchCatalogProps) {
  return (
    <section
      id="workbench-catalog"
      className="relative scroll-mt-24 border-t border-card-border bg-white py-12 sm:py-16 lg:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            ProVizient Workbench
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground md:text-4xl">
            {activeTab === "training"
              ? "Explore AI Training Programs"
              : "Explore Software Consulting Services"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted text-sm sm:text-base">
            {activeTab === "training"
              ? "Hands-on courses in GenAI, Agentic AI, RAG, Python, and more — built for real-world impact."
              : "End-to-End software development and consulting to design, build, and scale your digital products."}
          </p>

          <div className="mt-8 inline-flex rounded-xl border border-card-border bg-surface p-1 overflow-hidden">
            <button
              type="button"
              onClick={() => onTabChange("training")}
              className={cn(
                "rounded-lg px-4 sm:px-6 py-2.5 text-sm font-semibold transition-all min-h-[44px]",
                activeTab === "training"
                  ? "bg-foreground text-white shadow"
                  : "text-muted hover:text-foreground"
              )}
            >
              AI Training
            </button>
            <button
              type="button"
              onClick={() => onTabChange("consulting")}
              className={cn(
                "rounded-lg px-4 sm:px-6 py-2.5 text-sm font-semibold transition-all min-h-[44px]",
                activeTab === "consulting"
                  ? "bg-foreground text-white shadow"
                  : "text-muted hover:text-foreground"
              )}
            >
              Software Consulting
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "training" ? (
            <motion.div
              key="training"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <WorkbenchTrainingGrid />
            </motion.div>
          ) : (
            <motion.div
              key="consulting"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <WorkbenchConsultingGrid />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
