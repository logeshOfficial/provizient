/**
 * Fetches the latest 3 posts from dev.to/sreeni5018 and writes them to
 * src/data/devto-posts.json — runs automatically before `next build`.
 *
 * If the API is unreachable (e.g. CI network issues), the existing cached
 * file is preserved so the build never fails.
 */

import { writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = join(__dirname, "../src/data/devto-posts.json");
const DEVTO_USERNAME = "sreeni5018";
const COUNT = 3;

async function fetchLatestPosts() {
  console.log(`\n📡 Fetching latest ${COUNT} posts from dev.to/${DEVTO_USERNAME}...`);

  const url = `https://dev.to/api/articles?username=${DEVTO_USERNAME}&per_page=${COUNT}&state=fresh`;

  const res = await fetch(url, {
    headers: { "User-Agent": "ProVizient-Website/1.0" },
    signal: AbortSignal.timeout(10_000),
  });

  if (!res.ok) {
    throw new Error(`dev.to API returned ${res.status} ${res.statusText}`);
  }

  const articles = await res.json();

  const posts = articles.map((a) => ({
    title: a.title,
    url: a.url,
    date: new Date(a.published_at).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    readTime: `${a.reading_time_minutes} min read`,
    tags: (a.tag_list ?? []).slice(0, 3).map((t) =>
      t.charAt(0).toUpperCase() + t.slice(1)
    ),
    reactions: a.positive_reactions_count ?? 0,
  }));

  writeFileSync(OUTPUT_PATH, JSON.stringify(posts, null, 2), "utf-8");
  console.log(`✅ Saved ${posts.length} posts to src/data/devto-posts.json`);
  posts.forEach((p, i) => console.log(`   ${i + 1}. ${p.title}`));
  console.log("");
}

fetchLatestPosts().catch((err) => {
  console.warn(`\n⚠️  Could not fetch dev.to posts: ${err.message}`);

  if (existsSync(OUTPUT_PATH)) {
    console.warn("   Using cached devto-posts.json from last successful fetch.\n");
  } else {
    // Write a safe empty fallback so the build doesn't crash
    writeFileSync(
      OUTPUT_PATH,
      JSON.stringify([], null, 2),
      "utf-8"
    );
    console.warn("   Created empty fallback devto-posts.json.\n");
  }
});
