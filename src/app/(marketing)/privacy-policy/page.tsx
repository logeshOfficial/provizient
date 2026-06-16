import { SectionHeading } from "@/components/shared/section-heading";
import { generateSEO } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = generateSEO({
  title: "Privacy Policy",
  description: "ProVizient's privacy policy — how we collect, use, and protect your personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <SectionHeading
          title="Privacy Policy"
          description={`Last updated: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`}
          align="left"
        />

        <div className="prose prose-invert max-w-none space-y-6 text-muted">
          <section>
            <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
            <p>
              {SITE_CONFIG.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal identification information (name, email, phone, company)</li>
              <li>Usage data and analytics information</li>
              <li>Communication preferences and inquiry details</li>
              <li>Technical data (IP address, browser type, device information)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and consultation requests</li>
              <li>Provide and improve our consulting services</li>
              <li>Send relevant communications and updates</li>
              <li>Analyze website usage and optimize user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">4. Data Security</h2>
            <p>
              We implement industry-standard security measures including encryption, access controls,
              and regular security audits to protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">5. Your Rights</h2>
            <p>
              You have the right to access, correct, delete, or restrict the processing of your personal data.
              Contact us at {SITE_CONFIG.email} to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">6. Contact Us</h2>
            <p>
              For questions about this Privacy Policy, contact us at{" "}
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
