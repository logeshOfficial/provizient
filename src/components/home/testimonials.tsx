"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

const DEFAULT_TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "Meridian Financial Group",
    content:
      "ProVizient transformed our approach to AI. Their strategic guidance and technical execution delivered a 40% improvement in our fraud detection capabilities within six months.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "VP of Operations",
    company: "NovaTech Industries",
    content:
      "The team's expertise in intelligent automation helped us reduce operational costs by 35% while improving accuracy. A true enterprise partner.",
    rating: 5,
  },
  {
    name: "Dr. Emily Watson",
    role: "Chief Digital Officer",
    company: "HealthFirst Network",
    content:
      "From AI strategy to deployment, ProVizient guided us through every step. Their healthcare domain knowledge was invaluable for our diagnostic AI initiative.",
    rating: 5,
  },
];

type Testimonial = {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
};

type TestimonialsProps = {
  testimonials?: Testimonial[];
};

export function Testimonials({ testimonials = DEFAULT_TESTIMONIALS }: TestimonialsProps) {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="Trusted by Industry Leaders"
          description="Hear from the executives and technology leaders who have partnered with ProVizient to drive AI transformation."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-6 flex flex-col"
            >
              <Quote size={24} className="text-primary/40 mb-4" />
              <p className="text-muted leading-relaxed mb-6 flex-1">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
