import { prisma } from "@/lib/prisma";
import { FileText, MessageSquare, Mail, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function getStats() {
  try {
    const [blogCount, testimonialCount, contactCount, consultationCount] =
      await Promise.all([
        prisma.blogPost.count(),
        prisma.testimonial.count(),
        prisma.contactInquiry.count({ where: { status: "NEW" } }),
        prisma.consultation.count({ where: { status: "PENDING" } }),
      ]);
    return { blogCount, testimonialCount, contactCount, consultationCount };
  } catch {
    return {
      blogCount: 0,
      testimonialCount: 0,
      contactCount: 0,
      consultationCount: 0,
    };
  }
}

export default async function AdminDashboardPage() {
  const stats = await getStats();

  const cards = [
    {
      title: "Blog Posts",
      value: stats.blogCount,
      icon: FileText,
      href: "/admin/blog",
    },
    {
      title: "Testimonials",
      value: stats.testimonialCount,
      icon: MessageSquare,
      href: "/admin/testimonials",
    },
    {
      title: "New Inquiries",
      value: stats.contactCount,
      icon: Mail,
      href: "/admin/contacts",
    },
    {
      title: "Pending Consultations",
      value: stats.consultationCount,
      icon: Calendar,
      href: "/admin/consultations",
    },
  ];

  return (
    <div>
      <h1 className="font-display text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <a key={card.title} href={card.href}>
            <Card className="hover:border-primary/30 transition-colors cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted">
                  {card.title}
                </CardTitle>
                <card.icon size={18} className="text-primary" />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{card.value}</p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
