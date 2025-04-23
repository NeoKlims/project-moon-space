import type { CollectionConfig } from "payload";

const customers: CollectionConfig = {
  slug: "customers",
  auth: true,
  admin: {
    defaultColumns: ["name", "email"],
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "phone",
      type: "text",
    },
  ],

  timestamps: true,
};

export default customers;
