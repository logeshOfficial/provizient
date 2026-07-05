"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  TrnAIMLFoundationsIcon,
  SvcDataAnalyticsIcon,
  TrnRAGKnowledgeIcon,
  UsersIcon,
  ArrowRightIcon,
} from "@/components/icons/provizient-icons";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { AI_SOLUTIONS } from "@/lib/constants";

const solutionIcons = [TrnAIMLFoundationsIcon, SvcDataAnalyticsIcon, TrnRAGKnowledgeIcon, UsersIcon];

export function AISolutionsShowcase() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          badge="AI Solutions"
          title="Purpose-Built AI Solutions for Enterprise"
          description="Pre-architected solution frameworks that accelerate time-to-value while maintaining enterprise-grade security and scalability."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {AI_SOLUTIONS.map((solution, i) => {
            const Icon = solutionIcons[i] || Brain;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-8 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-card-border flex items-center justify-center shrink-0">
                    <Icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="gradient" size="lg" asChild>
            <Link href="/ai-solutions">
              Explore AI Solutions <ArrowRightIcon size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
