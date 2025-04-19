"use server";

import payloadConfig from "@payload-config";
import { getPayload } from "payload";

export async function getHeroImageUrl() {
  const payload = await getPayload({ config: payloadConfig });
  const landingConfig = await payload.findGlobal({
    slug: "landingConfig",
    select: {
      heroImage: true,
    },
  });
  if (
    !landingConfig.heroImage ||
    typeof landingConfig.heroImage !== "object" ||
    !landingConfig.heroImage.url
  )
    return { url: "/hero.jpg", alt: "Hero background" };

  const url = landingConfig.heroImage.url ?? "/hero.jpg";
  const alt = landingConfig.heroImage.alt ?? "Hero background";

  return { url, alt };
}
