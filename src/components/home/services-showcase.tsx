"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  SvcAIMLIcon,
  ArrowRightIcon,
} from "@/components/icons/provizient-icons";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
import { SERVICE_ICON_MAP } from "@/lib/icon-maps";

export function ServicesShowcase() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <SectionHeading
          badge="Our Services"
          title="Comprehensive AI Consulting Services"
          description="From strategy to deployment, we offer end-to-end AI consulting services tailored to enterprise needs."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICON_MAP[service.icon as keyof typeof SERVICE_ICON_MAP] || SvcAIMLIcon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link href={`/services#${service.id}`} className="block h-full">
                  <div className="glass-card p-6 h-full group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-card-border flex items-center justify-center mb-4 shrink-0">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRightIcon size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/services">
              View All Services <ArrowRightIcon size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
