import payloadConfig from "@payload-config";
import { getPayload } from "payload";

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

  return <div>{JSON.stringify(product)}</div>;
}

export default Page;
