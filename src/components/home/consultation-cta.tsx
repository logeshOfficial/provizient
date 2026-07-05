"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap } from "lucide-react";

export function ConsultationCTA() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Banner with theme gradient (instead of yellow) */}
        <div className="rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Ambient background glows inside card */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Side: Headlines */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
                Ready to Build the Future with AI?
              </h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Partner with Provizient Solutions for intelligent solutions or upskill with our expert-led training programs.
              </p>
            </div>

            {/* Right Side: Split Action Cards */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 border-t border-white/20 pt-8 lg:border-t-0 lg:border-l lg:border-white/20 lg:pt-0 lg:pl-8">
              
              {/* For Businesses Column */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">For Businesses</h3>
                    <p className="text-xs text-white/80">Let's build AI solutions that drive real business impact.</p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 shadow"
                >
                  Talk to Our Experts
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* For Professionals Column */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <GraduationCap size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">For Professionals</h3>
                    <p className="text-xs text-white/80">Start your AI journey and accelerate your career.</p>
                  </div>
                </div>
                <Link
                  href="/workbench"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 shadow"
                >
                  Explore Training
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
