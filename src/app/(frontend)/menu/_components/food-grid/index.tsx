import { FoodCard } from "@/components/food-card";

import { getFood } from "./actions";

export async function FoodGrid() {
  const food = await getFood();

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {food.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
}
