
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Instagram, Play } from "lucide-react";

export function InstagramFeed() {
  const instaImages = PlaceHolderImages.filter(p => p.id.startsWith('insta-'));

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Instagram className="h-8 w-8 text-primary" />
          <h2 className="font-headline text-3xl">Trending Reels</h2>
        </div>
        <a
          href="https://www.instagram.com/isra.ethnic?igsh=dnhtNHQ5dGlwdmcw"
          target="_blank"
          className="text-primary hover:underline font-bold tracking-widest text-sm uppercase"
        >
          Follow @isra.ethnic
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {instaImages.map((img, idx) => (
          <div
            key={img.id}
            className="aspect-[9/16] relative group overflow-hidden rounded-2xl cursor-pointer bg-card border border-primary/10"
          >
            <Image
              src={img.imageUrl}
              alt={img.description}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                <Play className="h-8 w-8 text-white fill-white" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-xs font-bold text-white/80 line-clamp-2 bg-black/50 backdrop-blur-sm p-2 rounded-lg">
                {img.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
