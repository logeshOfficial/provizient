import { redirect } from "next/navigation";

/**
 * Individual blog post slugs redirect to the dev.to profile.
 * All articles live at https://dev.to/sreeni5018
 */
export default function BlogPostPage() {
  redirect("https://dev.to/sreeni5018");
}
