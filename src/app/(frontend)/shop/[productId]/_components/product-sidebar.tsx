"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Product } from "@/payload-types";

interface ProductSidebarProps {
  product: Product;
  className?: string;
}

export function ProductSidebar({ product, className }: ProductSidebarProps) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value: number) => {
    if (quantity + value < 1) return;
    setQuantity(quantity + value);
  };

  return (
    <div
      className={cn(
        "sticky top-0 flex flex-col gap-4 rounded-xl border p-8 shadow-lg",
        className,
      )}
    >
      <span className="text-4xl font-extrabold">{product.name}</span>
      <span className="text-xl">{product.price}&euro;</span>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleQuantityChange(-1)}
        >
          <Minus />
        </Button>
        <div className="flex size-8 items-center justify-center">
          {quantity}
        </div>
        <Button onClick={() => handleQuantityChange(1)}>
          <Plus />
        </Button>
        <Button className="text-lg font-semibold">Add to cart</Button>
      </div>
      <article className="prose flex flex-col gap-2 whitespace-pre-line">
        {product.description}
      </article>
    </div>
  );
}
