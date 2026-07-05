"use client";

import {
  TrnAIMLFoundationsIcon,
  TrnGenAILLMsIcon,
  TrnAgenticAIIcon,
  TrnRAGKnowledgeIcon,
  TrnAIDevFrameworksIcon,
  TrnCloudAIPlatformsIcon,
  TrnProgrammingDataIcon,
  SvcAIMLIcon,
  SvcGenAIIcon,
  SvcAgenticAIIcon,
  SvcDataAnalyticsIcon,
  SvcSoftwareDevIcon,
  SvcCloudAIIcon,
  UsersIcon,
  ArrowRightIcon,
} from "@/components/icons/provizient-icons";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  TRAINING_PROGRAMS,
  DEV_SERVICES,
  HANDS_ON_PROJECTS,
  WORKBENCH_COURSE_META,
  WORKBENCH_CONSULTING_META,
} from "@/lib/constants";
import type { WorkbenchTab } from "@/components/workbench/workbench-hero";
import { cn } from "@/lib/utils";

const COLOR_MAP: Record<string, string> = {
  purple: "service-card-purple",
  blue: "service-card-blue",
  green: "service-card-green",
  orange: "service-card-orange",
  yellow: "service-card-yellow",
  slate: "service-card-slate",
};

const TRAINING_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Sparkles: TrnGenAILLMsIcon,
  Bot:      TrnAgenticAIIcon,
  Search:   TrnRAGKnowledgeIcon,
  Brain:    TrnAIMLFoundationsIcon,
  Terminal: TrnProgrammingDataIcon,
  BarChart3: TrnProgrammingDataIcon,
  Code2:    TrnAIDevFrameworksIcon,
  Cloud:    TrnCloudAIPlatformsIcon,
};

const CONSULTING_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Brain:    SvcAIMLIcon,
  Sparkles: SvcGenAIIcon,
  Bot:      SvcAgenticAIIcon,
  BarChart3: SvcDataAnalyticsIcon,
  Code2:    SvcSoftwareDevIcon,
  Cloud:    SvcCloudAIIcon,
  Users:    UsersIcon,
  Settings: SvcAIMLIcon,
  ShieldCheck: SvcCloudAIIcon,
  PieChart: SvcDataAnalyticsIcon,
  Plug:     SvcCloudAIIcon,
};

type WorkbenchCatalogProps = {
  activeTab: WorkbenchTab;
  onTabChange: (tab: WorkbenchTab) => void;
};

export function WorkbenchCatalog({ activeTab, onTabChange }: WorkbenchCatalogProps) {
  return (
    <section
      id="workbench-catalog"
      className="relative scroll-mt-24 border-t border-card-border bg-white py-20 lg:py-28"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            ProVizient Workbench
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            {activeTab === "training"
              ? "Explore AI Training Programs"
              : "Explore Software Consulting Services"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            {activeTab === "training"
              ? "Hands-on courses in GenAI, Agentic AI, RAG, Python, and more — built for real-world impact."
              : "End-to-End software development and consulting to design, build, and scale your digital products."}
          </p>

          <div className="mt-8 inline-flex rounded-xl border border-card-border bg-surface p-1">
            <button
              type="button"
              onClick={() => onTabChange("training")}
              className={cn(
                "rounded-lg px-6 py-2.5 text-sm font-semibold transition-all",
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
                "rounded-lg px-6 py-2.5 text-sm font-semibold transition-all",
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
              className="space-y-16"
            >
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {TRAINING_PROGRAMS.map((program, i) => {
                  const Icon = TRAINING_ICONS[program.icon] || TrnAIMLFoundationsIcon;
                  const meta = WORKBENCH_COURSE_META[program.id];
                  return (
                    <motion.article
                      key={program.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className={cn(
                        "group flex flex-col rounded-2xl border border-card-border p-6 transition-all hover:-translate-y-1 hover:shadow-lg",
                        COLOR_MAP[program.color]
                      )}
                    >
                      <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-card-border flex items-center justify-center mb-5 shrink-0">
                        <Icon size={28} />
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {program.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                        {program.description}
                      </p>
                      {meta && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-foreground">
                            {meta.duration}
                          </span>
                          <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-foreground">
                            {meta.level}
                          </span>
                        </div>
                      )}
                      {program.topics && (
                        <ul className="mt-4 space-y-1.5 border-t border-foreground/5 pt-4">
                          {program.topics.map((topic) => (
                            <li
                              key={topic}
                              className="flex items-center gap-2 text-xs text-muted"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      )}
                      <Link
                        href="/contact"
                        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        Enroll now <ArrowRightIcon size={14} />
                      </Link>
                    </motion.article>
                  );
                })}
              </div>

              {/* Capstone Projects Section */}
              <div className="border-t border-card-border pt-16">
                <div className="text-center mb-10">
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Hands-on Capstone Projects
                  </h3>
                  <p className="text-sm text-muted mt-2 max-w-2xl mx-auto">
                    Every training program includes real-world projects to build a robust portfolio.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {HANDS_ON_PROJECTS.map((project) => (
                    <div
                      key={project.title}
                      className="p-5 rounded-2xl border border-card-border bg-surface text-center hover:border-primary/20 transition-all shadow-sm hover:shadow"
                    >
                      <h4 className="font-bold text-foreground text-sm mb-2">{project.title}</h4>
                      <p className="text-xs text-muted leading-relaxed">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="consulting"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {DEV_SERVICES.map((service, i) => {
                const Icon =
                  CONSULTING_ICONS[service.icon] || SvcAIMLIcon;
                const meta = WORKBENCH_CONSULTING_META[service.id];
                return (
                  <motion.article
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className={cn(
                      "group flex flex-col rounded-2xl border border-card-border p-6 transition-all hover:-translate-y-1 hover:shadow-lg",
                      COLOR_MAP[service.color]
                    )}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-card-border flex items-center justify-center mb-5 shrink-0">
                      {Icon && <Icon size={28} />}
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                    {meta && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-foreground">
                          {meta.delivery}
                        </span>
                        <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-foreground">
                          {meta.outcome}
                        </span>
                      </div>
                    )}
                    {meta?.highlights && (
                      <ul className="mt-4 space-y-1.5 border-t border-foreground/5 pt-4">
                        {meta.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-xs text-muted"
                          >
                            <span className="h-1 w-1 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    <Link
                      href="/book-consultation"
                      className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      Request consultation <ArrowRightIcon size={14} />
                    </Link>
                  </motion.article>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
