import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import { updateConsultationStatus } from "@/app/admin/actions";

async function getConsultations() {
  try {
    return await prisma.consultation.findMany({ orderBy: { createdAt: "desc" } });
  } catch {
    return [];
  }
}

const STATUS_VARIANT: Record<string, "default" | "secondary" | "success" | "outline"> = {
  PENDING: "default",
  CONFIRMED: "secondary",
  COMPLETED: "success",
  CANCELLED: "outline",
};

export default async function AdminConsultationsPage() {
  const consultations = await getConsultations();

  return (
    <div>
      <h1 className="font-display text-3xl font-bold mb-8">Consultations</h1>

      {consultations.length === 0 ? (
        <div className="glass-card p-12 text-center text-muted">
          No consultation requests yet.
        </div>
      ) : (
        <div className="space-y-4">
          {consultations.map((c) => (
            <div key={c.id} className="glass-card p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h2 className="font-semibold">{c.name}</h2>
                  <p className="text-sm text-muted">
                    {c.email} · {c.company}
                  </p>
                </div>
                <Badge variant={STATUS_VARIANT[c.status] || "outline"}>
                  {c.status}
                </Badge>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 text-sm mb-3">
                <div>
                  <span className="text-muted">Industry:</span> {c.industry}
                </div>
                <div>
                  <span className="text-muted">Service:</span> {c.service}
                </div>
                {c.budget && (
                  <div>
                    <span className="text-muted">Budget:</span> {c.budget}
                  </div>
                )}
              </div>
              {c.message && (
                <p className="text-sm text-muted mb-3">{c.message}</p>
              )}
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  {formatDate(c.createdAt)}
                  {c.preferredDate && ` · Preferred: ${c.preferredDate}`}
                </p>
                <form action={updateConsultationStatus.bind(null, c.id, "CONFIRMED")}>
                  <Button variant="outline" size="sm" type="submit">
                    Confirm
                  </Button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
