import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { MarketingPageHero } from "@/components/marketing/marketing-page-hero";
import { ContactConnectVisual } from "@/components/marketing/marketing-hero-visuals";
import { ContactForm } from "@/components/forms/contact-form";
import { generateSEO } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = generateSEO({
  title: "Contact Us",
  description:
    "Get in touch with ProVizient's AI consulting team. We're here to answer your questions and discuss your AI initiatives.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <MarketingPageHero
        badge="Contact"
        title="Let's Start a"
        titleHighlight="Conversation"
        description="Whether you have a question about our services or want to discuss a potential engagement, our team is ready to help."
        primaryCta={{ href: "#contact-form", label: "Send a Message" }}
        secondaryCta={{ href: "/book-consultation", label: "Book Consultation" }}
        visual={<ContactConnectVisual />}
      />

      <section id="contact-form" className="scroll-mt-24 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="glass-card p-6">
                <Mail size={24} className="text-primary mb-3" />
                <h3 className="font-semibold mb-1">Email</h3>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-muted hover:text-primary transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="glass-card p-6">
                <Phone size={24} className="text-primary mb-3" />
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-muted">{SITE_CONFIG.phone}</p>
              </div>
              <div className="glass-card p-6">
                <MapPin size={24} className="text-primary mb-3" />
                <h3 className="font-semibold mb-1">Office</h3>
                <p className="text-muted">{SITE_CONFIG.address}</p>
              </div>
              <div className="glass-card p-6">
                <Clock size={24} className="text-primary mb-3" />
                <h3 className="font-semibold mb-1">Business Hours</h3>
                <p className="text-muted">Mon – Fri: 9:00 AM – 6:00 PM CST</p>
              </div>
            </div>

            <div className="lg:col-span-3 glass-card p-8">
              <h2 className="font-display text-2xl font-bold mb-6">
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
