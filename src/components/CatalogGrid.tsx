
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Card } from "@/components/ui/card";

export function CatalogGrid() {
  const items = [
    { id: "catalog-1", span: "row-span-3" },
    { id: "catalog-2", span: "row-span-2" },
    { id: "catalog-3", span: "row-span-3" },
    { id: "catalog-4", span: "row-span-2" },
    { id: "catalog-5", span: "row-span-4" },
    { id: "catalog-6", span: "row-span-2" },
  ];

  const getImg = (id: string) => PlaceHolderImages.find(p => p.id === id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[100px]">
      {items.map((item, idx) => {
        const imgData = getImg(item.id);
        if (!imgData) return null;

        return (
          <div
            key={item.id}
            className={`${item.span} group relative overflow-hidden rounded-xl bg-card border border-primary/10 transition-all duration-700 hover:border-primary/40 opacity-0 animate-fade-in`}
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            <Image
              src={imgData.imageUrl}
              alt={imgData.description}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              data-ai-hint={imgData.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <h3 className="font-headline text-xl text-primary">{imgData.description}</h3>
              <p className="text-sm text-muted-foreground mt-1 uppercase tracking-widest">New Collection</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
