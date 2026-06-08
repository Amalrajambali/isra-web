"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, Heart, User } from "lucide-react";

export function Hero() {
  const handleViewCollection = () => {
    const catalog = document.getElementById("catalog");
    if (catalog) {
      catalog.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleStoreLocation = () => {
    const location = document.getElementById("location");
    if (location) {
      location.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative h-[90vh] w-full flex items-center overflow-hidden bg-[#f6eee3]">
      <Image
        src="/hero-product.png"
        alt="Hero background for Isra Ethnic"
        fill
        priority
        className="object-cover pointer-events-none select-none"
        style={{ objectPosition: "72% 12%" }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#f8f1e6] via-[#f8f1e6]/70 to-transparent" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-foreground">
                Isra Churidars & Sarees
              </span>
            </div>
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">
              Since 2026 • Tirur
            </span>
            <h1 className="font-headline text-5xl md:text-7xl leading-tight text-foreground">
              Timeless <span className="italic font-light">Grace</span> & <br /> Modern{" "}
              <span className="text-primary italic">Elegance</span>
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground leading-relaxed">
              Experience the finest collection of luxury sarees and designer churidars, curated for the modern woman who values tradition.
            </p>
            <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
              Social identity: Isra Ethnic
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              onClick={handleViewCollection}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 rounded-full h-14 w-full sm:w-auto cursor-pointer"
            >
              View Collection
            </Button>
            <Button
              size="lg"
              onClick={handleStoreLocation}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 px-10 rounded-full h-14 w-full sm:w-auto cursor-pointer"
            >
              Store Location
            </Button>
          </div>

          {/* Premium Features Dashboard */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-foreground/10">
            <div className="flex flex-col sm:flex-col items-center sm:items-start text-center sm:text-left">
              <div className="rounded-full bg-primary/10 p-3 mb-2">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-foreground">
                Premium Quality
              </h4>
            </div>
            <div className="flex flex-col sm:flex-col items-center sm:items-start text-center sm:text-left">
              <div className="rounded-full bg-primary/10 p-3 mb-2">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-foreground">
                Timeless Elegance
              </h4>
            </div>
            <div className="flex flex-col sm:flex-col items-center sm:items-start text-center sm:text-left">
              <div className="rounded-full bg-primary/10 p-3 mb-2">
                <User className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-foreground">
                Made for You
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
