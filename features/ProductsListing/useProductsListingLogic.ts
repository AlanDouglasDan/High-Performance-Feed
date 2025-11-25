import { useState } from "react";

const CATEGORIES = [
  "All",
  "Beauty",
  "Clothing",
  "Electronics",
  "Home",
  "Shoes",
  "Sports",
  "Watches",
] as const;

export type ProductsCategory = (typeof CATEGORIES)[number];

export const useProductsListingLogic = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductsCategory>(
    CATEGORIES[0]
  );

  const handleSelectCategory = (category: ProductsCategory) => {
    setSelectedCategory(category);
  };

  return {
    categories: CATEGORIES,
    selectedCategory,
    handleSelectCategory,
  };
};
