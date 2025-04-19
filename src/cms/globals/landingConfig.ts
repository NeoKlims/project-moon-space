import type { GlobalConfig } from "payload";

const landingConfig: GlobalConfig = {
  slug: "landingConfig",
  fields: [
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "featuredProducts",
      type: "relationship",
      relationTo: "products",
      hasMany: true,
    },
    {
      name: "featuredFood",
      type: "relationship",
      relationTo: "food",
      hasMany: true,
    },
    {
      name: "featuredServices",
      type: "relationship",
      relationTo: "services",
      hasMany: true,
    },
  ],
};

export default landingConfig;
