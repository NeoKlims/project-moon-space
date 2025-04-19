import type { CollectionConfig } from "payload";

import { makeFirstUserAdmin } from "./hooks";

const users: CollectionConfig = {
  slug: "users",
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
    {
      name: "role",
      type: "select",
      options: ["admin", "worker", "user"],
      defaultValue: "user",
    },
  ],
  hooks: {
    beforeChange: [makeFirstUserAdmin],
  },
  timestamps: true,
};

export default users;
