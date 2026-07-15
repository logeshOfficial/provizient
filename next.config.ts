import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Set basePath and assetPrefix for GitHub Pages deployment
  ...(isGitHubPages && {
    basePath: "/provizient",
    assetPrefix: "/provizient",
  }),
  // API routes handled by PHP on Hostinger
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || '/api',
  },
};

export default nextConfig;
