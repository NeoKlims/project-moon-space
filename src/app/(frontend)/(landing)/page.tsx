import { Footer } from "@/components/footer";

import { About } from "./_components/about";
import { FeaturedProducts } from "./_components/featured-products";
import { Hero } from "./_components/hero";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <About />
        <FeaturedProducts />
      </main>
    </div>
  );
}
