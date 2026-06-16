import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import { updateContactStatus } from "@/app/admin/actions";

async function getContacts() {
  try {
    return await prisma.contactInquiry.findMany({ orderBy: { createdAt: "desc" } });
  } catch {
    return [];
  }
}

const STATUS_VARIANT: Record<string, "default" | "secondary" | "success" | "outline"> = {
  NEW: "default",
  IN_PROGRESS: "secondary",
  RESOLVED: "success",
  ARCHIVED: "outline",
};

export default async function AdminContactsPage() {
  const contacts = await getContacts();

  return (
    <div>
      <h1 className="font-display text-3xl font-bold mb-8">Contact Inquiries</h1>

      {contacts.length === 0 ? (
        <div className="glass-card p-12 text-center text-muted">
          No contact inquiries yet.
        </div>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div key={contact.id} className="glass-card p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h2 className="font-semibold">{contact.name}</h2>
                  <p className="text-sm text-muted">{contact.email}</p>
                </div>
                <Badge variant={STATUS_VARIANT[contact.status] || "outline"}>
                  {contact.status}
                </Badge>
              </div>
              <p className="text-sm font-medium mb-1">{contact.subject}</p>
              <p className="text-sm text-muted mb-3">{contact.message}</p>
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  {formatDate(contact.createdAt)}
                  {contact.company && ` · ${contact.company}`}
                </p>
                <form action={updateContactStatus.bind(null, contact.id, "RESOLVED")}>
                  <Button variant="outline" size="sm" type="submit">
                    Mark Resolved
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
