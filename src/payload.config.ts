import path from "path";
import { fileURLToPath } from "url";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";
import sharp from "sharp";

import admins from "./cms/collections/admins";
import customers from "./cms/collections/customers";
import employees from "./cms/collections/employees";
import food from "./cms/collections/food";
import foodCategory from "./cms/collections/foodCategory";
import media from "./cms/collections/media";
import productCategories from "./cms/collections/productCategories";
import products from "./cms/collections/products";
import serviceCategories from "./cms/collections/serviceCategories";
import services from "./cms/collections/services";
import landingConfig from "./cms/globals/landingConfig";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: "admins",
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  secret: process.env.PAYLOAD_SECRET,
  collections: [
    admins,
    customers,
    employees,
    food,
    foodCategory,
    media,
    products,
    productCategories,
    services,
    serviceCategories,
  ],
  globals: [landingConfig],
  sharp,
  graphQL: {
    disable: true,
  },
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
