"use client";

import { WhatsAppIcon } from "@/components/icons/provizient-icons";
import { SOCIAL_LINKS } from "@/lib/constants";

export function FloatingActions() {
  return (
    <a
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-all hover:bg-[#20bd5a] hover:-translate-y-1 hover:shadow-xl"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
