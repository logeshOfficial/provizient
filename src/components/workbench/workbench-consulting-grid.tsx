"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SvcAIMLIcon, ArrowRightIcon } from "@/components/icons/provizient-icons";
import { DEV_SERVICES, WORKBENCH_CONSULTING_META } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CARD_COLOR_MAP } from "@/lib/card-colors";
import { SERVICE_ICON_MAP } from "@/lib/icon-maps";

export function WorkbenchConsultingGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {DEV_SERVICES.map((service, i) => {
        const Icon = SERVICE_ICON_MAP[service.icon as keyof typeof SERVICE_ICON_MAP] || SvcAIMLIcon;
        const meta = WORKBENCH_CONSULTING_META[service.id];
        return (
          <motion.article
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className={cn(
              "group flex flex-col rounded-2xl border border-card-border p-6 transition-all hover:-translate-y-1 hover:shadow-lg",
              CARD_COLOR_MAP[service.color]
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
    </div>
  );
}
