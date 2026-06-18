import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { assetPath } from "@/lib/utils";

const FOOTER_LINKS = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "For Business" },
    { href: "/workbench", label: "Courses" },
    { href: "/blog", label: "Resources" },
  ],
  solutions: [
    { href: "/services", label: "Software Development" },
    { href: "/workbench", label: "AI Training" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact Us" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-and-conditions", label: "Terms & Conditions" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-card-border bg-surface" role="contentinfo">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src={assetPath("/logo.png")}
                alt="ProVizient — AI Training | Software Development | Consulting"
                width={260}
                height={78}
                className="h-14 w-auto max-w-[260px] object-contain"
              />
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-2 max-w-sm font-medium">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-muted text-sm leading-relaxed mb-6 max-w-sm">
              {SITE_CONFIG.subtitle}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
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
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
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
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phoneTel}`}
                  className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                >
                  <Phone size={16} className="shrink-0 text-primary" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                >
                  <Mail size={16} className="shrink-0 text-primary" />
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-card-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-primary transition-colors"
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
