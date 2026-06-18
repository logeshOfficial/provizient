"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { assetPath, cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass border-b border-card-border py-3 shadow-sm"
          : "bg-white/80 backdrop-blur-sm py-4"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src={assetPath("/logo.png")}
              alt="ProVizient — AI Training | Software Development | Consulting"
              width={240}
              height={72}
              className="h-11 w-auto object-contain sm:h-12"
              priority
            />
          </Link>

          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              size="default"
              className="rounded-full bg-foreground px-6 hover:bg-foreground/90"
              asChild
            >
              <Link href="/book-consultation">Get Started</Link>
            </Button>
            <Button
              size="default"
              variant="outline"
              className="rounded-full border-foreground px-6 text-foreground hover:bg-foreground/5"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-card-border shadow-lg"
          >
            <nav
              className="container mx-auto px-4 py-4 flex flex-col gap-1"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="mt-4 rounded-full" asChild>
                <Link href="/contact" onClick={() => setIsMobileOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
