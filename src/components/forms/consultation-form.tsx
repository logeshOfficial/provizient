"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Loader2Icon, CalendarIcon } from "@/components/icons/provizient-icons";
import { SERVICES } from "@/lib/constants";

const consultationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().optional(),
  industry: z.string().min(2, "Please select an industry"),
  service: z.string().min(2, "Please select a service"),
  budget: z.string().optional(),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

const INDUSTRY_OPTIONS = [
  "Financial Services",
  "Healthcare & Life Sciences",
  "Manufacturing",
  "Retail & E-Commerce",
  "Energy & Utilities",
  "Government & Public Sector",
  "Technology",
  "Other",
];

const BUDGET_OPTIONS = [
  "Under $50,000",
  "$50,000 - $150,000",
  "$150,000 - $500,000",
  "$500,000+",
  "Not sure yet",
];

export function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
  });

  const onSubmit = async (data: ConsultationFormData) => {
    setIsSubmitting(true);
    try {
      if (process.env.NEXT_PUBLIC_DEMO_MODE === "true") {
        await new Promise((r) => setTimeout(r, 600));
        toast({
          title: "Demo: request received!",
          description:
            "This is a POC demo — no email was sent. Production uses Azure + Resend.",
          variant: "success",
        });
        reset();
        return;
      }

      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit request");
      }

      toast({
        title: "Consultation requested!",
        description: "Our team will contact you within 1-2 business days.",
        variant: "success",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" placeholder="John Doe" {...register("name")} />
          {errors.name && (
            <p className="text-sm text-destructive" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Work Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@company.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-destructive" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="company">Company *</Label>
          <Input id="company" placeholder="Acme Corp" {...register("company")} />
          {errors.company && (
            <p className="text-sm text-destructive" role="alert">
              {errors.company.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" placeholder="+1 (555) 000-0000" {...register("phone")} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="industry">Industry *</Label>
          <select
            id="industry"
            className="flex h-11 w-full rounded-lg border border-card-border bg-white px-4 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            {...register("industry")}
            defaultValue=""
          >
            <option value="" disabled>
              Select industry
            </option>
            {INDUSTRY_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-slate-900">
                {opt}
              </option>
            ))}
          </select>
          {errors.industry && (
            <p className="text-sm text-destructive" role="alert">
              {errors.industry.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Service of Interest *</Label>
          <select
            id="service"
            className="flex h-11 w-full rounded-lg border border-card-border bg-white px-4 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            {...register("service")}
            defaultValue=""
          >
            <option value="" disabled>
              Select service
            </option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.title} className="bg-slate-900">
                {s.title}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-sm text-destructive" role="alert">
              {errors.service.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="budget">Estimated Budget</Label>
          <select
            id="budget"
            className="flex h-11 w-full rounded-lg border border-card-border bg-white px-4 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            {...register("budget")}
            defaultValue=""
          >
            <option value="">Select budget range</option>
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-slate-900">
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="preferredDate">Preferred Date</Label>
          <Input id="preferredDate" type="date" {...register("preferredDate")} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Details</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your AI goals, challenges, or timeline..."
          rows={4}
          {...register("message")}
        />
      </div>

      <Button
        type="submit"
        variant="gradient"
        size="lg"
        className="w-full sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2Icon className="animate-spin" size={18} />
            Submitting...
          </>
        ) : (
          <>
            <CalendarIcon size={18} />
            Request Consultation
          </>
        )}
      </Button>
    </form>
  );
}
