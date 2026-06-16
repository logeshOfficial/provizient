"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NewBlogPostPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get("title") as string,
      excerpt: formData.get("excerpt") as string,
      content: formData.get("content") as string,
      author: formData.get("author") as string,
      tags: (formData.get("tags") as string).split(",").map((t) => t.trim()),
      published: formData.get("published") === "on",
    };

    try {
      const res = await fetch("/api/admin/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to create post");

      toast({ title: "Post created", variant: "success" });
      router.push("/admin/blog");
    } catch {
      toast({ title: "Error creating post", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Link
        href="/admin/blog"
        className="inline-flex items-center gap-2 text-muted hover:text-foreground mb-6"
      >
        <ArrowLeft size={16} /> Back to Blog
      </Link>
      <h1 className="font-display text-3xl font-bold mb-8">New Blog Post</h1>

      <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5 max-w-3xl">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea id="excerpt" name="excerpt" rows={2} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="content">Content (HTML)</Label>
          <Textarea id="content" name="content" rows={12} required />
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="author">Author</Label>
            <Input id="author" name="author" defaultValue="ProVizient Team" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tags">Tags (comma-separated)</Label>
            <Input id="tags" name="tags" placeholder="AI, Strategy" />
          </div>
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="published" className="rounded" />
          Publish immediately
        </label>
        <Button type="submit" variant="gradient" disabled={loading}>
          {loading ? <Loader2 className="animate-spin" size={18} /> : "Create Post"}
        </Button>
      </form>
    </div>
  );
}
