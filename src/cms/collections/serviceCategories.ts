import type { CollectionConfig } from "payload";

const serviceCategories: CollectionConfig = {
  slug: "serviceCategories",
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

export default serviceCategories;
