"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { INDUSTRIES } from "@/lib/constants";
import {
  IndManufacturingIcon,
  IndHealthcareIcon,
  IndFinancialIcon,
  IndRetailIcon,
  IndEducationIcon,
  IndEnergyIcon,
  IndLogisticsIcon,
  IndGovernmentIcon,
  IndTechnologyIcon,
  IndInsuranceIcon,
} from "@/components/icons/provizient-icons";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Factory:       IndManufacturingIcon,
  HeartPulse:    IndHealthcareIcon,
  Landmark:      IndFinancialIcon,
  ShoppingCart:  IndRetailIcon,
  ShieldCheck:   IndInsuranceIcon,
  GraduationCap: IndEducationIcon,
  Building2:     IndGovernmentIcon,
  Zap:           IndEnergyIcon,
  Truck:         IndLogisticsIcon,
  Laptop:        IndTechnologyIcon,
};

export function IndustriesServed() {
  return (
    <section className="py-14 sm:py-16 bg-white border-t border-card-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-muted mb-1">
            Industries We Serve
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">
            AI Solutions Across Every Sector
          </h2>
        </div>

        {/* Responsive grid — 5 columns on lg, 4 on md, 3 on sm, 2 on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {INDUSTRIES.map((industry, i) => {
            const IconComponent = ICON_MAP[industry.icon as keyof typeof ICON_MAP] || IndTechnologyIcon;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <Link
                  href="/industries"
                  className="flex flex-col items-center gap-2.5 p-4 rounded-2xl border border-card-border bg-surface hover:bg-white hover:border-primary/20 hover:shadow-md transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white border border-card-border flex items-center justify-center group-hover:bg-primary/8 group-hover:border-primary/20 transition-all shadow-sm">
                    <IconComponent size={24} />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-muted group-hover:text-foreground transition-colors text-center leading-tight">
                    {industry.title}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
