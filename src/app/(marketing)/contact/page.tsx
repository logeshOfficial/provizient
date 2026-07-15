import { MailIcon, PhoneIcon, MapPinIcon, GlobeIcon, CheckCircleIcon } from "@/components/icons/provizient-icons";
import { ContactForm } from "@/components/forms/contact-form";
import { generateSEO } from "@/lib/seo";
import { SITE_CONFIG, CONTACT_SERVICES } from "@/lib/constants";

export const metadata = generateSEO({
  title: "Contact Us — Provizient Solutions",
  description:
    "Get in touch with Provizient Solutions' AI consulting and training team. Let's build the future with AI.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section id="contact-form" className="pt-28 pb-10 sm:pt-32 sm:pb-12 lg:pt-36 lg:pb-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Left Column: Office locations and services list */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8 order-2 lg:order-1">

              {/* Brand & Services Card */}
              <div className="glass-card p-5 sm:p-6 border-t-4 border-t-primary">
                <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-1">
                  {SITE_CONFIG.name}
                </h3>
                <p className="text-[11px] font-semibold text-primary uppercase tracking-wider mb-4">
                  {SITE_CONFIG.subtitle}
                </p>
                <div className="section-title-line mb-4 ml-0" />
                <h4 className="text-xs font-bold text-foreground mb-3 uppercase tracking-wider">
                  Our Offerings
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-muted">
                  {CONTACT_SERVICES.map((service) => (
                    <div key={service} className="flex items-center gap-2">
                      <CheckCircleIcon size={13} className="text-primary shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get in Touch */}
              <div className="space-y-4">
                <h3 className="font-display text-base sm:text-lg font-bold text-foreground uppercase tracking-widest">
                  Get in Touch
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5">

                  {SITE_CONFIG.offices.map((office) => (
                    <div key={office.label} className="glass-card p-5 sm:p-6 space-y-3">
                      <div className="border-b border-card-border pb-2">
                        <span className="font-bold text-foreground text-xs sm:text-sm uppercase tracking-wider">
                          {office.label}
                        </span>
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-muted">
                        <li>
                          <a
                            href={`mailto:${SITE_CONFIG.email}`}
                            className="flex items-center gap-2 hover:text-primary transition-colors"
                          >
                            <MailIcon size={15} className="text-primary shrink-0" />
                            <span>{SITE_CONFIG.email}</span>
                          </a>
                        </li>
                        <li className="flex items-center gap-2">
                          <PhoneIcon size={15} className="text-primary shrink-0" />
                          <span>{SITE_CONFIG.phone}</span>
                        </li>
                        <li>
                          <a
                            href={SITE_CONFIG.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-primary transition-colors"
                          >
                            <GlobeIcon size={15} className="text-primary shrink-0" />
                            <span>{SITE_CONFIG.website}</span>
                          </a>
                        </li>
                        <li className="flex items-start gap-2">
                          <MapPinIcon size={15} className="text-primary shrink-0 mt-0.5" />
                          <span>{office.address}</span>
                        </li>
                      </ul>
                    </div>
                  ))}

                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 glass-card p-5 sm:p-7 lg:p-8 bg-surface order-1 lg:order-2">
              <h2 className="font-display text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-foreground">
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


