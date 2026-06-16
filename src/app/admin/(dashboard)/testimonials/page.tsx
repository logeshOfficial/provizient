import Link from "next/link";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { prisma } from "@/lib/prisma";
import { Star } from "lucide-react";
import { deleteTestimonial } from "@/app/admin/actions";

async function getTestimonials() {
  try {
    return await prisma.testimonial.findMany({ orderBy: { createdAt: "desc" } });
  } catch {
    return [];
  }
}

export default async function AdminTestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-3xl font-bold">Testimonials</h1>
        <Button variant="gradient" asChild>
          <Link href="/admin/testimonials/new">
            <Plus size={18} /> Add Testimonial
          </Link>
        </Button>
      </div>

      {testimonials.length === 0 ? (
        <div className="glass-card p-12 text-center text-muted">
          No testimonials yet.
        </div>
      ) : (
        <div className="space-y-4">
          {testimonials.map((t) => (
            <div key={t.id} className="glass-card p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="font-semibold">{t.name}</h2>
                    {t.featured && <Badge variant="success">Featured</Badge>}
                    <div className="flex">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted mb-2">
                    {t.role}, {t.company}
                  </p>
                  <p className="text-sm">&ldquo;{t.content}&rdquo;</p>
                </div>
                <form action={deleteTestimonial.bind(null, t.id)}>
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
