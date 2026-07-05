import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  path?: string;
};

export function generateSEO({
  title,
  description = SITE_CONFIG.description,
  image = "/og-image.png",
  noIndex = false,
  path = "",
}: SEOProps = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`;

  const url = `${SITE_CONFIG.url}${path}`;

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: image, width: 1200, height: 630, alt: pageTitle }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}