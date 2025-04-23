import { Suspense } from "react";

import { CategorySelector } from "./_components/category-selector";
import { ProductsGrid } from "./_components/product-grid";

interface PageProps {
  searchParams: { categories?: string };
}

async function Page({ searchParams }: PageProps) {
  // For future implementation: parse category IDs from searchParams
  const categoryIds = searchParams.categories
    ? searchParams.categories.split(",")
    : undefined;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Our Products
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          Discover our range of premium beauty and wellness products
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <CategorySelector />
          </div>
        </div>
        <div className="md:col-span-3">
          <Suspense fallback={<div>Loading products...</div>}>
            <ProductsGrid categoryIds={categoryIds} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default Page;
