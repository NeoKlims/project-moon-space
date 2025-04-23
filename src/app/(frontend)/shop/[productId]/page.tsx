import payloadConfig from "@payload-config";
import { getPayload } from "payload";

import { ProductImages } from "./_components/product-images";
import { ProductSidebar } from "./_components/product-sidebar";

async function getProduct(productId: string) {
  "use server";
  const payload = await getPayload({ config: payloadConfig });
  const product = await payload.findByID({
    disableErrors: true,
    collection: "products",
    id: productId,
  });
  return product;
}

interface PageProps {
  params: Promise<{ productId: string }>;
}

async function Page({ params }: PageProps) {
  const { productId } = await params;
  const product = await getProduct(productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="m-4 flex gap-2">
      <ProductImages product={product} className="flex-2" />
      <ProductSidebar product={product} className="flex-1" />
    </div>
  );
}

export default Page;
