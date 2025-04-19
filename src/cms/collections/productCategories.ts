import type { CollectionConfig } from "payload";

const productCategories: CollectionConfig = {
  slug: "productCategories",
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

export default productCategories;
