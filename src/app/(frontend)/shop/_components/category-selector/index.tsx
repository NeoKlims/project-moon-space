"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ProductCategory } from "@/payload-types";

// Mock data for categories
const mockCategories: ProductCategory[] = [
  {
    id: "1",
    name: "Skincare",
    description: "Facial and body skin products",
    updatedAt: "",
    createdAt: "",
  },
  {
    id: "2",
    name: "Makeup",
    description: "Cosmetics and beauty products",
    updatedAt: "",
    createdAt: "",
  },
  {
    id: "3",
    name: "Hair Care",
    description: "Products for hair treatment",
    updatedAt: "",
    createdAt: "",
  },
  {
    id: "4",
    name: "Body Care",
    description: "Body lotions and treatments",
    updatedAt: "",
    createdAt: "",
  },
  {
    id: "5",
    name: "Fragrances",
    description: "Perfumes and body sprays",
    updatedAt: "",
    createdAt: "",
  },
];

export function CategorySelector() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize selected categories from URL
  const [selectedCategories, setSelectedCategories] = useState<string[]>(() => {
    const categoriesParam = searchParams.get("categories");
    return categoriesParam ? categoriesParam.split(",") : [];
  });

  // Update URL when selected categories change
  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (selectedCategories.length > 0) {
      params.set("categories", selectedCategories.join(","));
    } else {
      params.delete("categories");
    }

    // Replace the URL with the new params
    router.replace(`${pathname}?${params.toString()}`);
  }, [selectedCategories, pathname, router, searchParams]);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) => {
      return prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId];
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Categories</h3>
      <div className="space-y-2">
        {mockCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => toggleCategory(category.id)}
            className={cn(
              "flex w-full items-center justify-between rounded-md px-4 py-2 text-left text-sm transition-colors hover:bg-muted",
              selectedCategories.includes(category.id) ? "bg-muted" : "",
            )}
          >
            <span>{category.name}</span>
            <div className="flex items-center gap-2">
              {selectedCategories.includes(category.id) && (
                <Check className="h-4 w-4" />
              )}
            </div>
          </button>
        ))}
      </div>
      {selectedCategories.length > 0 && (
        <div className="pt-2">
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map((id) => {
              const category = mockCategories.find((c) => c.id === id);
              return (
                <Badge
                  key={id}
                  variant="outline"
                  className="cursor-pointer"
                  onClick={() => toggleCategory(id)}
                >
                  {category?.name}
                  <span className="ml-1 text-muted-foreground">×</span>
                </Badge>
              );
            })}
            <button
              onClick={() => setSelectedCategories([])}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Clear all
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
