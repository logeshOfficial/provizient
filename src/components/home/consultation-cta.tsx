"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ConsultationCTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Ready to Build Your Future?
        </h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
          Whether you need enterprise software, AI training, or strategic
          consulting — ProVizient is your partner for growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="rounded-full px-8 bg-white text-primary hover:bg-white/90"
            asChild
          >
            <Link href="/book-consultation">
              Schedule a Consultation
              <ArrowRight size={18} />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-white text-white hover:bg-white/10"
            asChild
          >
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
