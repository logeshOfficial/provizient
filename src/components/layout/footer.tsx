import Link from "next/link";
import { Mail, MapPin, Phone, Share2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const FOOTER_LINKS = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/blog", label: "Blog" },
  ],
  solutions: [
    { href: "/ai-solutions", label: "AI Solutions" },
    { href: "/industries", label: "Industries" },
    { href: "/book-consultation", label: "Book Consultation" },
    { href: "/contact", label: "Contact Us" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-and-conditions", label: "Terms & Conditions" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/50" role="contentinfo">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-display text-xl font-bold">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6 max-w-sm">
              {SITE_CONFIG.tagline} Partner with us to unlock the full potential
              of artificial intelligence for your enterprise.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 text-muted hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Share2 size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 text-muted hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Share2 size={18} />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 text-muted hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Solutions</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                {SITE_CONFIG.address}
              </li>
              <li className="flex items-center gap-2 text-sm text-muted">
                <Phone size={16} className="shrink-0 text-primary" />
                {SITE_CONFIG.phone}
              </li>
              <li className="flex items-center gap-2 text-sm text-muted">
                <Mail size={16} className="shrink-0 text-primary" />
                {SITE_CONFIG.email}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
