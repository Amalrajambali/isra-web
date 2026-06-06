"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export function Hero() {
  const heroImg = PlaceHolderImages.find((p) => p.id === "hero-saree");

  return (
    <section className="relative h-[90vh] w-full flex items-center overflow-hidden bg-accent/30">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
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
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 rounded-full h-14">
              View Collection
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 px-10 rounded-full h-14">
              Store Location
            </Button>
          </div>
        </div>

        <div className="hidden lg:block relative h-[70vh] w-full rounded-2xl overflow-hidden shadow-2xl animate-fade-in" style={{ animationDelay: "200ms" }}>
          {heroImg && (
            <Image
              src={heroImg.imageUrl}
              alt={heroImg.description}
              fill
              priority
              className="object-cover"
              data-ai-hint={heroImg.imageHint}
            />
          )}
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/20 -z-0 skew-x-12 transform translate-x-20 hidden lg:block" />
    </section>
  );
}
