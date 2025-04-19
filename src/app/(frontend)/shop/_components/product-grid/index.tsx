import { ProductCard } from "@/components/product-card";

import { getProducts } from "./actions";

export async function ProductsGrid() {
  const products = await getProducts();

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
