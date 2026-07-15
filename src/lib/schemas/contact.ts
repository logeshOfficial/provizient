import { z } from "zod";

/**
 * Contact form validation schema.
 * Enforces all field length constraints per Requirements 1.1, 1.4, 1.5.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(500, "Name must not exceed 500 characters"),
  email: z
    .string()
    .email("Please enter a valid email")
    .max(500, "Email must not exceed 500 characters"),
  company: z
    .string()
    .max(500, "Company must not exceed 500 characters")
    .optional(),
  phone: z
    .string()
    .max(500, "Phone must not exceed 500 characters")
    .optional(),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(500, "Subject must not exceed 500 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must not exceed 5000 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
