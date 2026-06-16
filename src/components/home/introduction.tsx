"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";

export function Introduction() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <SectionHeading
            badge="Who We Are"
            title="Your Strategic Partner in Enterprise AI"
            description="ProVizient is a premier AI consulting firm dedicated to helping organizations navigate the complexities of artificial intelligence adoption. We combine deep technical expertise with business acumen to deliver solutions that create lasting value."
            align="left"
            className="mb-0"
          />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              {
                title: "Proven Expertise",
                text: "Our team of AI researchers, engineers, and strategists bring decades of combined experience across industries.",
              },
              {
                title: "Outcome-Driven",
                text: "Every engagement is measured against clear business KPIs — we focus on ROI, not just technology.",
              },
              {
                title: "End-to-End Delivery",
                text: "From strategy through deployment and optimization, we guide you through every stage of your AI journey.",
              },
            ].map((item, i) => (
              <div key={item.title} className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
