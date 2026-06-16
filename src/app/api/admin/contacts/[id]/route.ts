import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type RouteParams = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const { id } = await params;

  try {
    const formData = await request.formData();
    const status = formData.get("status") as string;

    const contact = await prisma.contactInquiry.update({
      where: { id },
      data: { status: status as "NEW" | "IN_PROGRESS" | "RESOLVED" | "ARCHIVED" },
    });

    return NextResponse.json(contact);
  } catch {
    return NextResponse.json({ message: "Failed to update" }, { status: 500 });
  }
}
