import { ProductsGrid } from "./_components/product-grid";

interface PageProps {
  searchParams: Promise<{ categories?: string }>;
}

async function Page() {
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
      <ProductsGrid />
    </div>
  );
}

export default Page;
