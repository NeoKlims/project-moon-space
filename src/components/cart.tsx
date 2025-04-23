"use client";

import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/lib/cart-store";

export function Cart() {
  const { items, getTotalItems } = useCartStore();

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart size={32} strokeWidth={2} />
          {getTotalItems() > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
              {getTotalItems()}
            </span>
          )}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Shopping Cart</h4>
          <Separator />
          {items.length === 0 ? (
            <p className="text-sm text-muted-foreground">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{item.id}</p>
                    <p className="text-sm text-muted-foreground">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
