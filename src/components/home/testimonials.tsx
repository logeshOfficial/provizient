"use client";

import { motion } from "framer-motion";
import { StarIcon, QuoteIcon } from "@/components/icons/provizient-icons";

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
    <section className="py-16 sm:py-20 lg:py-24 bg-surface border-t border-card-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-primary mb-3">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-3 text-muted max-w-lg mx-auto text-sm sm:text-base">
            Hear from executives and technology leaders who have partnered with ProVizient to drive AI transformation.
          </p>
          <div className="section-title-line mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-6 flex flex-col"
            >
              <QuoteIcon size={22} className="text-primary/30 mb-3 shrink-0" />
              <p className="text-sm sm:text-base text-muted leading-relaxed mb-5 flex-1">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <StarIcon key={j} size={13} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted mt-0.5">
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
