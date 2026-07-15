"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, XIcon } from "@/components/icons/provizient-icons";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
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
          ? "glass border-b border-card-border py-2 shadow-lg shadow-black/20"
          : "bg-background/80 backdrop-blur-sm py-2"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between gap-2 xl:gap-4">
          <Link href="/" className="flex items-center shrink-0" aria-label="ProVizient home">
            <Image
              src={assetPath("/logo.png")}
              alt="ProVizient — AI Training | Software Development | Consulting"
              width={1428}
              height={405}
              className="h-14 w-auto sm:h-16 lg:h-20 object-contain logo-adaptive"
              priority
              unoptimized
            />
          </Link>

          <nav
            className="hidden lg:flex items-center gap-0.5 xl:gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 xl:px-3.5 py-2 text-[13px] xl:text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-primary/5 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-2.5 xl:px-3.5 py-2 text-[13px] xl:text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-primary/5 whitespace-nowrap"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <ThemeToggle />
            <Button
              size="default"
              className="rounded-full bg-primary px-4 xl:px-6 text-[13px] xl:text-sm text-white hover:bg-primary/90 min-h-[40px] xl:min-h-[44px]"
              asChild
            >
              <Link href="/book-consultation">Get Started</Link>
            </Button>
            <Button
              size="default"
              variant="outline"
              className="rounded-full border-primary/30 bg-card px-4 xl:px-6 text-[13px] xl:text-sm text-primary hover:bg-primary/10 hover:border-primary/50 min-h-[40px] xl:min-h-[44px]"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <div className="lg:hidden flex items-center gap-2 shrink-0">
            <ThemeToggle />
            <button
              className="relative z-10 p-2.5 text-foreground min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-surface border-t border-card-border shadow-lg"
          >
            <nav
              className="container mx-auto px-4 py-4 flex flex-col gap-1"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
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