import type { CollectionConfig } from "payload";

const food: CollectionConfig = {
  slug: "food",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: false,
    },
    {
      name: "price",
      type: "number",
      required: true,
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "foodCategory",
    },
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "images",
      type: "upload",
      relationTo: "media",
      hasMany: true,
    },
  ],
};

export default food;
