"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/workbench", label: "Training" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

const SERVICES_LINKS = [
  { href: "/services#ai-ml-solutions", label: "AI & ML Solutions" },
  { href: "/services#generative-ai", label: "Generative AI" },
  { href: "/services#agentic-ai", label: "Agentic AI" },
  { href: "/services#data-analytics", label: "Data & Analytics" },
  { href: "/services#software-development", label: "Software Development" },
  { href: "/services#cloud-ai", label: "Cloud AI" },
];

const TRAINING_LINKS = [
  { href: "/workbench#ai-foundations", label: "AI & ML" },
  { href: "/workbench#generative-ai-training", label: "Generative AI" },
  { href: "/workbench#agentic-ai-training", label: "Agentic AI" },
  { href: "/workbench#rag-training", label: "RAG & Knowledge Systems" },
  { href: "/workbench#ai-frameworks", label: "AI Frameworks" },
  { href: "/workbench#cloud-ai-platforms", label: "Cloud AI Platforms" },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-900 pb-16 md:pb-0" role="contentinfo">
      <div className="container mx-auto px-4 lg:px-8 py-16">

        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Logo & Description Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex flex-col">
                <span className="font-display text-lg sm:text-xl font-black tracking-[0.1em] text-white">
                  PROVIZIENT
                </span>
                <span className="font-display text-xs tracking-[0.35em] text-primary font-bold">
                  SOLUTIONS
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              AI, ML, Generative and Agentic AI solutions and training to help businesses innovate and professionals grow.
            </p>

            {/* Social Media Links — all inline SVGs to avoid lucide-react version gaps */}
            <div className="flex gap-4">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/provizient"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com/provizient"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-800 transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@provizient"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-800 transition-colors"
                aria-label="YouTube"
              >
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/logeshOfficial/provizient"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-800 transition-colors"
                aria-label="GitHub"
              >
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.48 0-.236-.009-.866-.014-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Services</h3>
            <ul className="space-y-2">
              {SERVICES_LINKS.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training Column */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Training</h3>
            <ul className="space-y-2">
              {TRAINING_LINKS.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-semibold text-white text-sm tracking-wider uppercase">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  <Mail size={15} className="shrink-0 text-primary" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phoneTel}`}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  <Phone size={15} className="shrink-0 text-primary" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin size={15} className="mt-0.5 shrink-0 text-primary" />
                <span>{SITE_CONFIG.address}</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-white shadow transition-all hover:bg-primary/90 hover:translate-y-[-1px]"
              >
                Get in Touch
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; 2026 {SITE_CONFIG.name}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}