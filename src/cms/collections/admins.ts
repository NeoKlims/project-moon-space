import type { CollectionConfig } from "payload";

const admins: CollectionConfig = {
  slug: "admins",
  auth: true,
  admin: {
    defaultColumns: ["name", "email"],
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
  ],
  timestamps: true,
};

export default admins;
