"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ConsultationCTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30" />
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <div className="relative glass p-10 md:p-16 text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Calendar size={32} className="text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
              Schedule a complimentary consultation with our AI strategists.
              We&apos;ll assess your opportunities and outline a path to
              measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="xl" asChild>
                <Link href="/book-consultation">
                  Book Free Consultation
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
