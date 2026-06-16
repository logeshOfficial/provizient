import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";
import { z } from "zod";

const blogSchema = z.object({
  title: z.string().min(3).optional(),
  excerpt: z.string().min(10).optional(),
  content: z.string().min(20).optional(),
  author: z.string().optional(),
  tags: z.array(z.string()).optional(),
  published: z.boolean().optional(),
  coverImage: z.string().optional(),
});

type RouteParams = { params: Promise<{ id: string }> };

export async function DELETE(_request: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    await prisma.blogPost.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ message: "Failed to delete post" }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const body = await request.json();
    const data = blogSchema.parse(body);

    const post = await prisma.blogPost.update({
      where: { id },
      data: {
        ...data,
        ...(data.title ? { slug: slugify(data.title) } : {}),
      },
    });

    return NextResponse.json(post);
  } catch {
    return NextResponse.json({ message: "Failed to update post" }, { status: 500 });
  }
}
