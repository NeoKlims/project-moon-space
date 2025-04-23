"use server";

import payloadConfig from "@payload-config";
import { getPayload } from "payload";

import { ProductCategory } from "@/payload-types";

export async function getCategories(): Promise<ProductCategory[]> {
  try {
    const payload = await getPayload({ config: payloadConfig });
    const results = await payload.find({
      collection: "productCategories",
    });
    return results.docs;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
