"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewTestimonialPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      role: formData.get("role") as string,
      company: formData.get("company") as string,
      content: formData.get("content") as string,
      rating: parseInt(formData.get("rating") as string) || 5,
      featured: formData.get("featured") === "on",
    };

    try {
      const res = await fetch("/api/admin/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

      toast({ title: "Testimonial added", variant: "success" });
      router.push("/admin/testimonials");
    } catch {
      toast({ title: "Error", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Link href="/admin/testimonials" className="inline-flex items-center gap-2 text-muted hover:text-foreground mb-6">
        <ArrowLeft size={16} /> Back
      </Link>
      <h1 className="font-display text-3xl font-bold mb-8">Add Testimonial</h1>

      <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5 max-w-2xl">
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Input id="role" name="role" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="content">Testimonial</Label>
          <Textarea id="content" name="content" rows={4} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="rating">Rating (1-5)</Label>
          <Input id="rating" name="rating" type="number" min={1} max={5} defaultValue={5} />
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="featured" className="rounded" />
          Feature on homepage
        </label>
        <Button type="submit" variant="gradient" disabled={loading}>
          {loading ? <Loader2 className="animate-spin" size={18} /> : "Add Testimonial"}
        </Button>
      </form>
    </div>
  );
}
