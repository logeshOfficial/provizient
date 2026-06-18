import type { MetadataRoute } from "next";
import { SITE_CONFIG, CASE_STUDIES } from "@/lib/constants";
import { BLOG_POSTS } from "@/data/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticPages = [
    "",
    "/about",
    "/services",
    "/workbench",
    "/ai-solutions",
    "/industries",
    "/case-studies",
    "/blog",
    "/contact",
    "/book-consultation",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const caseStudyPages = CASE_STUDIES.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.createdAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...caseStudyPages, ...blogPages];
}
