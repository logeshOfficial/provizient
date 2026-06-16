import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { generateSEO } from "@/lib/seo";
import { BLOG_POSTS, getPostBySlug } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return generateSEO({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-muted mb-10 pb-8 border-b border-white/5">
            <span className="flex items-center gap-2">
              <User size={14} /> {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={14} /> {formatDate(post.createdAt)}
            </span>
          </div>

          <div
            className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </>
  );
}
