import data from '@/app/lib/placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl?: string;
  imageHint: string;
  reelUrl?: string;
  price?: string | number | null;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
