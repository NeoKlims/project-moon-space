import type { CollectionBeforeChangeHook } from "payload";

import type { User } from "@/payload-types";

export const makeFirstUserAdmin: CollectionBeforeChangeHook<User> = async ({
  data,
  req,
  operation,
}) => {
  if (operation !== "create") return;

  const { totalDocs: userCount } = await req.payload.find({
    collection: "users",
  });

  if (userCount === 0) {
    return { ...data, role: "admin" };
  }

  return data;
};
