import { Mail, Phone, MapPin, Globe, CheckCircle } from "lucide-react";
import { MarketingPageHero } from "@/components/marketing/marketing-page-hero";
import { ContactConnectVisual } from "@/components/marketing/marketing-hero-visuals";
import { ContactForm } from "@/components/forms/contact-form";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Contact Us — Provizient Solutions",
  description:
    "Get in touch with Provizient Solutions' AI consulting and training team. Let's build the future with AI.",
  path: "/contact",
});

const SERVICES_OFFERED = [
  "Corporate AI Training",
  "Professional AI Certification Programs",
  "Custom Software Development",
  "AI Consulting",
  "Enterprise AI Solutions",
  "Cloud AI Architecture",
  "AI Workshops",
  "Technology Advisory",
];

export default function ContactPage() {
  return (
    <>
      <MarketingPageHero
        badge="Contact Us"
        title="Let's Build the"
        titleHighlight="Future with AI"
        description="Whether you're looking to train your team, build intelligent software, or explore AI opportunities for your business, we're here to help."
        primaryCta={{ href: "#contact-form", label: "Send a Message" }}
        secondaryCta={{ href: "/book-consultation", label: "Book Consultation" }}
        visual={<ContactConnectVisual />}
      />

      <section id="contact-form" className="scroll-mt-24 py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Column: Office locations and services list */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Brand & Services Card */}
              <div className="glass-card p-6 border-t-4 border-t-primary">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  Provizient Solutions
                </h3>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                  AI • ML • Generative AI • Agentic AI
                </p>
                <div className="section-title-line mb-4 ml-0" />
                
                <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">
                  Our Offerings
                </h4>
                <div className="grid sm:grid-cols-2 gap-2 text-xs font-medium text-muted">
                  {SERVICES_OFFERED.map((service) => (
                    <div key={service} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-primary shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get in Touch: Locations */}
              <div className="space-y-4">
                <h3 className="font-display text-lg font-bold text-foreground uppercase tracking-widest">
                  Get in Touch
                </h3>
                <div className="grid gap-6">
                  
                  {/* US Location Card */}
                  <div className="glass-card p-6 space-y-3">
                    <div className="flex items-center gap-2 border-b border-card-border pb-2">
                      <span className="font-bold text-foreground text-sm uppercase tracking-wider">US Office</span>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-muted">
                      <li>
                        <a href="mailto:info@provizient.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                          <Mail size={16} className="text-primary shrink-0" />
                          <span>info@provizient.com</span>
                        </a>
                      </li>
                      <li className="flex items-center gap-2">
                        <Phone size={16} className="text-primary shrink-0" />
                        <span>+1 (214) 907-0925</span>
                      </li>
                      <li>
                        <a href="https://www.provizient.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                          <Globe size={16} className="text-primary shrink-0" />
                          <span>www.provizient.com</span>
                        </a>
                      </li>
                      <li className="flex items-start gap-2">
                        <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                        <span>Dallas–Fort Worth, Texas, USA</span>
                      </li>
                    </ul>
                  </div>

                  {/* India Location Card */}
                  <div className="glass-card p-6 space-y-3">
                    <div className="flex items-center gap-2 border-b border-card-border pb-2">
                      <span className="font-bold text-foreground text-sm uppercase tracking-wider">India Office</span>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-muted">
                      <li>
                        <a href="mailto:info@provizient.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                          <Mail size={16} className="text-primary shrink-0" />
                          <span>info@provizient.com</span>
                        </a>
                      </li>
                      <li className="flex items-center gap-2">
                        <Phone size={16} className="text-primary shrink-0" />
                        <span>+1 (214) 907-0925</span>
                      </li>
                      <li>
                        <a href="https://www.provizient.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                          <Globe size={16} className="text-primary shrink-0" />
                          <span>www.provizient.com</span>
                        </a>
                      </li>
                      <li className="flex items-start gap-2">
                        <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                        <span>India</span>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 glass-card p-8 bg-surface">
              <h2 className="font-display text-2xl font-bold mb-6 text-foreground">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
