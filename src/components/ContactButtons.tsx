
"use client";

import { MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <MessageSquare className="h-6 w-6 text-white" />
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
