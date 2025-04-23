"use server";

import payloadConfig from "@payload-config";
import { getPayload } from "payload";

export async function getProducts(categoryIds?: string[]) {
  const payload = await getPayload({ config: payloadConfig });

  // Define the query to include category filtering when categoryIds are provided
  const query: any = {};

  if (categoryIds && categoryIds.length > 0) {
    // This would filter products by category in a real implementation
    // Note: actual implementation may vary depending on the data structure
    query.category = {
      in: categoryIds,
    };
  }

  const results = await payload.find({
    collection: "products",
    where: query,
  });

  return results.docs;
}
