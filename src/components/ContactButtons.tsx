
"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6 text-white"
      fill="currentColor"
    >
      <path d="M12.04 2c-5.52 0-10 4.36-10 9.74 0 1.94.59 3.84 1.7 5.48L2 22l4.94-1.59c1.57.87 3.36 1.32 5.1 1.32h.01c5.52 0 10-4.36 10-9.74C22.05 6.36 17.57 2 12.04 2Zm0 17.65c-1.54 0-3.06-.41-4.41-1.19l-.32-.19-2.93.94.96-2.82-.21-.34a7.93 7.93 0 0 1-1.24-4.23c0-4.44 3.72-8.05 8.3-8.05 4.58 0 8.3 3.61 8.3 8.05 0 4.45-3.72 8.03-8.3 8.03Zm4.55-5.77c-.25-.12-1.47-.71-1.7-.8-.23-.09-.39-.12-.55.12-.16.23-.63.8-.77.96-.14.16-.28.18-.53.06-.25-.12-1.06-.38-2.02-1.22-.75-.66-1.25-1.48-1.4-1.73-.15-.25-.02-.38.1-.5.1-.1.25-.28.38-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.31-.75-1.79-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.8-.84 1.95 0 1.16.86 2.28.98 2.44.12.16 1.68 2.57 4.07 3.6.57.24 1.01.39 1.36.5.57.18 1.09.15 1.5.09.46-.07 1.47-.6 1.68-1.17.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export function ContactButtons() {
  const whatsappNumber = "8113081120";
  const callNumber = "9961264495";

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 shadow-2xl transition-all hover:scale-110 active:scale-95"
        onClick={() => window.open(`https://wa.me/91${whatsappNumber}`, "_blank")}
        title="WhatsApp Shop"
      >
        <WhatsAppIcon />
      </Button>
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-2xl transition-all hover:scale-110 active:scale-95 border-2 border-background"
        onClick={() => window.location.href = `tel:+91${callNumber}`}
        title="Call Shop"
      >
        <Phone className="h-6 w-6 text-primary-foreground" />
      </Button>
    </div>
  );
}
