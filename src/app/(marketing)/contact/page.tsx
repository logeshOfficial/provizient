import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
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
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Contact"
            title="Let's Start a Conversation"
            description="Whether you have a question about our services or want to discuss a potential engagement, our team is ready to help."
          />
        </div>
      </section>

      <section className="py-20">
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
                <p className="text-muted">Mon – Fri: 9:00 AM – 6:00 PM PST</p>
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
