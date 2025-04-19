import Image from "next/image";
import Link from "next/link";
import { DollarSign } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Food } from "@/payload-types";

interface FoodCardProps {
  food: Food;
}

export function FoodCard({ food }: FoodCardProps) {
  if (typeof food.heroImage !== "object") {
    throw new Error("Hero image is not an object");
  }

  return (
    <Card className="overflow-hidden pt-0 transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden rounded-t-lg">
        <Image
          className="object-cover transition-transform duration-500 hover:scale-105"
          src={food.heroImage.url || "/placeholder.svg"}
          alt={food.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle>{food.name}</CardTitle>
        <CardDescription>{food.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <span>{food.price}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link className="w-full" href={`/menu/${food.id}`}>
          <Button className="w-full">Book Now</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
