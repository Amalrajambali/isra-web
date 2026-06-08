"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function CatalogGrid() {
  const catalogImages = PlaceHolderImages.filter((p) => p.id.startsWith("catalog-"));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {catalogImages.map((imgData, idx) => {
        return (
          <div
            key={imgData.id}
            className="group space-y-4 animate-fade-in"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted border border-border/50">
              <Image
                src={imgData.imageUrl}
                alt={imgData.description}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint={imgData.imageHint}
              />
            </div>
            <div className="space-y-1">
              <h3 className="font-headline text-xl text-foreground group-hover:text-primary transition-colors">
                {imgData.description}
              </h3>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Designer Series</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
