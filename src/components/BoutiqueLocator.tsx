
"use client";

import { MapPin, Navigation, Clock, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function BoutiqueLocator() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
      <div className="space-y-8">
        <div>
          <h2 className="font-headline text-3xl sm:text-4xl mb-4 text-primary">Visit Us</h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Experience the luxury of our collections in person. Our boutique in Tirur offers a curated selection of sarees and churidars with personalized styling assistance.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-1">Our Address</h4>
              <p className="text-muted-foreground">Thekkummuri, Tirur, Malappuram, Kerala</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-1">Business Hours</h4>
              <p className="text-muted-foreground">Mon - Sat: 10:00 AM - 7:30 PM</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-1">Contact</h4>
              <p className="text-muted-foreground">8113081120 / 9961264495</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=Isra+CHURIDAR & SAREES+Thekkummuri+Tirur", "_blank")}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all hover:translate-y-[-2px] active:translate-y-0 shadow-lg"
        >
          <Navigation className="h-5 w-5" />
          Get Directions
        </button>
      </div>

      <div className="relative h-[300px] sm:h-[450px] w-full rounded-3xl overflow-hidden border border-primary/20 shadow-2xl">
        <iframe
          src="https://maps.google.com/maps?q=Isra%20Churidars%20%26%20Sarees%20Tirur&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-primary/20"></div>
      </div>
    </div>
  );
}
