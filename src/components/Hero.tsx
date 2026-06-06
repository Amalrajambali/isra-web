
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export function Hero() {
  const heroImg = PlaceHolderImages.find(p => p.id === 'hero-saree');

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {heroImg && (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg.imageUrl}
            alt={heroImg.description}
            fill
            priority
            className="object-cover object-center scale-105"
            data-ai-hint={heroImg.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </div>
      )}
      <div className="container relative z-10 px-6 py-12 flex flex-col items-start max-w-5xl mr-auto">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-[0.3em] uppercase">
            Luxury Ethnic Wear
          </div>
          <h1 className="font-headline text-6xl md:text-8xl leading-tight text-white drop-shadow-sm">
            Elegance <br />
            <span className="text-primary italic">Redefined</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground font-body leading-relaxed">
            Discover the perfect blend of tradition and modernity with Isra Ethnic. Our curated collection of sarees and churidars brings out your inner radiance for every special moment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 rounded-full text-lg h-14">
              Explore Catalog
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 px-10 rounded-full text-lg h-14">
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
