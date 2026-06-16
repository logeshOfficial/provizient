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

    const consultation = await prisma.consultation.update({
      where: { id },
      data: { status: status as "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED" },
    });

    return NextResponse.json(consultation);
  } catch {
    return NextResponse.json({ message: "Failed to update" }, { status: 500 });
  }
}
