"use server";

import payloadConfig from "@payload-config";
import { getPayload } from "payload";

export async function getFeaturedProducts() {
  const payload = await getPayload({ config: payloadConfig });
  const landingConfig = await payload.findGlobal({
    slug: "landingConfig",
    select: {
      featuredProducts: true,
    },
  });

  if (
    !landingConfig.featuredProducts ||
    landingConfig.featuredProducts.length === 0
  )
    return [];

  return landingConfig.featuredProducts.filter(
    (product) => typeof product === "object",
  );
}
