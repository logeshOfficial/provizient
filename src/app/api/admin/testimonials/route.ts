import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const testimonialSchema = z.object({
  name: z.string().min(2),
  role: z.string().min(2),
  company: z.string().min(2),
  content: z.string().min(10),
  avatar: z.string().optional(),
  rating: z.number().min(1).max(5).optional(),
  featured: z.boolean().optional(),
});

export async function GET() {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const testimonials = await prisma.testimonial.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json(testimonials);
  } catch {
    return NextResponse.json({ message: "Database error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const body = await request.json();
    const data = testimonialSchema.parse(body);
    const testimonial = await prisma.testimonial.create({ data });
    return NextResponse.json(testimonial, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Failed to create testimonial" }, { status: 500 });
  }
}
