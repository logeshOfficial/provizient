import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import {
  sendContactNotification,
  sendContactConfirmation,
} from "@/lib/email";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    try {
      await prisma.contactInquiry.create({ data });
    } catch (dbError) {
      console.warn("[Contact] Database unavailable, continuing with email only:", dbError);
    }

    await Promise.all([
      sendContactNotification(data),
      sendContactConfirmation(data.email, data.name),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid form data", errors: error.issues },
        { status: 400 }
      );
    }
    console.error("[Contact API]", error);
    return NextResponse.json(
      { message: "Failed to process contact form" },
      { status: 500 }
    );
  }
}
