import { SectionHeading } from "@/components/shared/section-heading";
import { generateSEO } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = generateSEO({
  title: "Terms and Conditions",
  description: "Terms and conditions governing the use of ProVizient's website and services.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <SectionHeading
          title="Terms and Conditions"
          description={`Last updated: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`}
          align="left"
        />

        <div className="prose prose-invert max-w-none space-y-6 text-muted">
          <section>
            <h2 className="text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the {SITE_CONFIG.name} website, you accept and agree to be bound
              by these Terms and Conditions. If you do not agree, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">2. Services</h2>
            <p>
              {SITE_CONFIG.name} provides AI consulting services as described on this website.
              Specific engagements are governed by separate service agreements between {SITE_CONFIG.name}
              and the client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">3. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is the
              property of {SITE_CONFIG.name} and is protected by applicable intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">4. Limitation of Liability</h2>
            <p>
              {SITE_CONFIG.name} shall not be liable for any indirect, incidental, special, or
              consequential damages arising from the use of this website or our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">5. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the
              State of California, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">6. Contact</h2>
            <p>
              For questions about these Terms, contact us at{" "}
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary">
                {SITE_CONFIG.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
