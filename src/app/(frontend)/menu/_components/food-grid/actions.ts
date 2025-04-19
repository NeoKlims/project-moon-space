"use server";

import payloadConfig from "@payload-config";
import { getPayload } from "payload";

export async function getFood() {
  const payload = await getPayload({ config: payloadConfig });
  const results = await payload.find({
    collection: "food",
  });
  return results.docs;
}
