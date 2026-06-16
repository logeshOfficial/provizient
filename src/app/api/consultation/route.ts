import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import {
  sendConsultationNotification,
  sendConsultationConfirmation,
} from "@/lib/email";

const consultationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  phone: z.string().optional(),
  industry: z.string().min(2),
  service: z.string().min(2),
  budget: z.string().optional(),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = consultationSchema.parse(body);

    try {
      await prisma.consultation.create({ data });
    } catch (dbError) {
      console.warn("[Consultation] Database unavailable, continuing with email only:", dbError);
    }

    await Promise.all([
      sendConsultationNotification(data),
      sendConsultationConfirmation(data.email, data.name),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid form data", errors: error.issues },
        { status: 400 }
      );
    }
    console.error("[Consultation API]", error);
    return NextResponse.json(
      { message: "Failed to process consultation request" },
      { status: 500 }
    );
  }
}
