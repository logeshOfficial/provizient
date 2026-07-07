"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TrnAIMLFoundationsIcon, ArrowRightIcon } from "@/components/icons/provizient-icons";
import { TRAINING_PROGRAMS, HANDS_ON_PROJECTS, WORKBENCH_COURSE_META } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CARD_COLOR_MAP } from "@/lib/card-colors";
import { TRAINING_ICON_MAP } from "@/lib/icon-maps";

export function WorkbenchTrainingGrid() {
  return (
    <div className="space-y-16">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TRAINING_PROGRAMS.map((program, i) => {
          const Icon = TRAINING_ICON_MAP[program.icon as keyof typeof TRAINING_ICON_MAP] || TrnAIMLFoundationsIcon;
          const meta = WORKBENCH_COURSE_META[program.id];
          return (
            <motion.article
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className={cn(
                "group flex flex-col rounded-2xl border border-card-border p-6 transition-all hover:-translate-y-1 hover:shadow-lg",
                CARD_COLOR_MAP[program.color]
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
    </div>
  );
}
