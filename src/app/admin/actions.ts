"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

async function requireAuth() {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");
}

export async function updateContactStatus(id: string, status: string) {
  await requireAuth();
  await prisma.contactInquiry.update({
    where: { id },
    data: { status: status as "NEW" | "IN_PROGRESS" | "RESOLVED" | "ARCHIVED" },
  });
  revalidatePath("/admin/contacts");
}

export async function updateConsultationStatus(id: string, status: string) {
  await requireAuth();
  await prisma.consultation.update({
    where: { id },
    data: { status: status as "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED" },
  });
  revalidatePath("/admin/consultations");
}

export async function deleteBlogPost(id: string) {
  await requireAuth();
  await prisma.blogPost.delete({ where: { id } });
  revalidatePath("/admin/blog");
}

export async function deleteTestimonial(id: string) {
  await requireAuth();
  await prisma.testimonial.delete({ where: { id } });
  revalidatePath("/admin/testimonials");
}
