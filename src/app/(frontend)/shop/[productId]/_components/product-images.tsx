"use client";

import { Carousel } from "@/components/ui/aceternity-carousel";
import { cn } from "@/lib/utils";
import { Product } from "@/payload-types";

interface ProductImagesProps {
  product: Product;
  className?: string;
}

export function ProductImages({ product, className }: ProductImagesProps) {
  const heroImage =
    typeof product.heroImage !== "string" ? product.heroImage?.url : null;

  const productImages =
    product.images
      ?.filter((image) => typeof image !== "string")
      .map((image) => image.url)
      .filter((url) => url !== null && url !== undefined) ?? [];

  const images = heroImage ? [heroImage, ...productImages] : productImages;

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-xl border py-20 shadow-lg",
        className,
      )}
    >
      <Carousel images={images} />
    </div>
  );
}
