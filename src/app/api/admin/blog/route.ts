import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";
import { z } from "zod";

const blogSchema = z.object({
  title: z.string().min(3),
  excerpt: z.string().min(10),
  content: z.string().min(20),
  author: z.string().optional(),
  tags: z.array(z.string()).optional(),
  published: z.boolean().optional(),
  coverImage: z.string().optional(),
});

async function requireAuth() {
  const session = await auth();
  if (!session?.user) {
    return null;
  }
  return session;
}

export async function GET() {
  const session = await requireAuth();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const posts = await prisma.blogPost.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ message: "Database error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await requireAuth();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const body = await request.json();
    const data = blogSchema.parse(body);

    const post = await prisma.blogPost.create({
      data: {
        ...data,
        slug: slugify(data.title),
        author: data.author || "ProVizient Team",
        tags: data.tags || [],
        published: data.published ?? false,
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: "Invalid data", errors: error.issues }, { status: 400 });
    }
    return NextResponse.json({ message: "Failed to create post" }, { status: 500 });
  }
}
