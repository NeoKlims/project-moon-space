"use server";

import payloadConfig from "@payload-config";
import { getPayload } from "payload";

export async function getProducts() {
  const payload = await getPayload({ config: payloadConfig });
  const results = await payload.find({
    collection: "products",
  });
  return results.docs;
}
