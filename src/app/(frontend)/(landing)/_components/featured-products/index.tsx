import Link from "next/link";

import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { getFeaturedProducts } from "./actions";

export async function FeaturedProducts() {
  const featuredProducts = await getFeaturedProducts();
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Our Products
        </h2>
        <Link href="/shop">
          <Button className="text-xl" size="lg">
            View All
          </Button>
        </Link>
      </div>
      <Carousel>
        <CarouselPrevious />
        <CarouselContent className="p-4">
          {featuredProducts.map((product) => (
            <CarouselItem
              key={product.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  );
}
