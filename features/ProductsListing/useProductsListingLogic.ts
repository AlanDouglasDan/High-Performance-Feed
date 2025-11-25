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

export type ProductsListingProduct = {
  id: number;
  title: string;
  price: number;
  rating: number;
  category: ProductsCategory;
  thumbnailUrl: string;
};

const PRODUCTS: ProductsListingProduct[] = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    price: 12.99,
    rating: 4.5,
    category: "Beauty",
    thumbnailUrl:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  },
  {
    id: 2,
    title: "Essence Mascara Lash Princess",
    price: 12.99,
    rating: 4.5,
    category: "Beauty",
    thumbnailUrl:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  },
  {
    id: 3,
    title: "Essence Mascara Lash Princess",
    price: 12.99,
    rating: 4.5,
    category: "Beauty",
    thumbnailUrl:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  },
  {
    id: 4,
    title: "Essence Mascara Lash Princess",
    price: 12.99,
    rating: 4.5,
    category: "Beauty",
    thumbnailUrl:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  },
];

export const useProductsListingLogic = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductsCategory>(
    CATEGORIES[0]
  );

  const handleSelectCategory = (category: ProductsCategory) => {
    setSelectedCategory(category);
  };

  const products = PRODUCTS.filter((product) => {
    if (selectedCategory === "All") return true;
    return product.category === selectedCategory;
  });

  return {
    categories: CATEGORIES,
    selectedCategory,
    handleSelectCategory,
    products,
  };
};
