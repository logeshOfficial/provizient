import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/og-image.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
      contactType: "customer service",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address,
    },
    sameAs: [
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.twitter,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
