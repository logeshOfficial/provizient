"use client";

import { WhatsAppIcon } from "@/components/icons/provizient-icons";

const WA_NUMBER = "12149070925";
const WA_MESSAGE = encodeURIComponent(
  "Hi ProVizient! I'm interested in learning more about your AI consulting and training services. Could you please share more details?"
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export function FloatingActions() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-all hover:bg-[#20bd5a] hover:-translate-y-1 hover:shadow-xl"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
