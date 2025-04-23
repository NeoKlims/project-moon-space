import type { CollectionConfig } from "payload";

const employees: CollectionConfig = {
  slug: "employees",
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
      name: "email",
      type: "email",
    },
    {
      name: "phone",
      type: "text",
    },
  ],

  timestamps: true,
};

export default employees;
