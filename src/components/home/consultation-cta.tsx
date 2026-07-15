"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon, BriefcaseIcon, GraduationCapIcon } from "@/components/icons/provizient-icons";

export function ConsultationCTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary p-7 sm:p-10 md:p-12 text-white shadow-xl relative overflow-hidden"
        >
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-background/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-background/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">

            {/* Headline column */}
            <div className="lg:col-span-5 space-y-3">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Ready to Build the Future with AI?
              </h2>
              <p className="text-white/85 text-sm sm:text-base leading-relaxed">
                Partner with ProVizient for enterprise AI solutions — or upskill your team with our expert-led training programs.
              </p>
            </div>

            {/* Action cards column */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:border-l lg:border-white/20 lg:pl-8">

              {/* For Businesses */}
              <div className="bg-background/10 border border-white/15 rounded-2xl p-5 space-y-3 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-background/15 flex items-center justify-center shrink-0">
                    <BriefcaseIcon size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm leading-tight">For Businesses</h3>
                    <p className="text-xs text-white/75 mt-0.5">Drive real business impact with AI.</p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-background/95 px-4 py-2.5 text-sm font-bold text-primary transition-all hover:bg-background shadow-sm"
                >
                  Talk to Our Experts
                  <ArrowRightIcon size={14} />
                </Link>
              </div>

              {/* For Professionals */}
              <div className="bg-background/10 border border-white/15 rounded-2xl p-5 space-y-3 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-background/15 flex items-center justify-center shrink-0">
                    <GraduationCapIcon size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm leading-tight">For Professionals</h3>
                    <p className="text-xs text-white/75 mt-0.5">Accelerate your AI career journey.</p>
                  </div>
                </div>
                <Link
                  href="/workbench"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-background/95 px-4 py-2.5 text-sm font-bold text-primary transition-all hover:bg-background shadow-sm"
                >
                  Explore Training
                  <ArrowRightIcon size={14} />
                </Link>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


