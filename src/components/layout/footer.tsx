"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Linkedin, Twitter, Youtube, Github, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { assetPath } from "@/lib/utils";

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
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-900" role="contentinfo">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Logo & Description Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              {/* Fallback to text logo if image is not loaded, but keep image element */}
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
            
            {/* Social Media Links */}
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-800 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-800 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-800 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary transition-colors"
                  >
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
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary transition-colors"
                  >
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
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary transition-colors"
                  >
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

            {/* Solid button (primary theme color instead of yellow) */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-white shadow transition-all hover:bg-primary/95 hover:translate-y-[-1px]"
              >
                Get in Touch
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; 2026 {SITE_CONFIG.name}. All Rights Reserved.
          </p>
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
