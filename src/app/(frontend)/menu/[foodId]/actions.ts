"use server";

import payloadConfig from "@payload-config";
import { getPayload } from "payload";

export async function getFood(foodId: string) {
  const payload = await getPayload({ config: payloadConfig });
  const product = await payload.findByID({
    disableErrors: true,
    collection: "food",
    id: foodId,
  });
  return product;
}
