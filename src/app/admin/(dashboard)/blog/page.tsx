import Link from "next/link";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import { deleteBlogPost } from "@/app/admin/actions";

async function getPosts() {
  try {
    return await prisma.blogPost.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch {
    return [];
  }
}

export default async function AdminBlogPage() {
  const posts = await getPosts();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-3xl font-bold">Blog Posts</h1>
        <Button variant="gradient" asChild>
          <Link href="/admin/blog/new">
            <Plus size={18} /> New Post
          </Link>
        </Button>
      </div>

      {posts.length === 0 ? (
        <div className="glass-card p-12 text-center text-muted">
          No blog posts yet. Create your first post.
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="glass-card p-5 flex items-center justify-between gap-4"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="font-semibold truncate">{post.title}</h2>
                  <Badge variant={post.published ? "success" : "outline"}>
                    {post.published ? "Published" : "Draft"}
                  </Badge>
                </div>
                <p className="text-sm text-muted truncate">{post.excerpt}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {formatDate(post.createdAt)}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Button variant="ghost" size="icon" asChild>
                  <Link href={`/admin/blog/${post.id}/edit`}>
                    <Pencil size={16} />
                  </Link>
                </Button>
                <form action={deleteBlogPost.bind(null, post.id)}>
                  <Button variant="ghost" size="icon" type="submit">
                    <Trash2 size={16} className="text-destructive" />
                  </Button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
