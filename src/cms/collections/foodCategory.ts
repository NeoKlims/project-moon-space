import type { CollectionConfig } from "payload";

const foodCategory: CollectionConfig = {
  slug: "foodCategory",
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
  ],
};

export default foodCategory;
