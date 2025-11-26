import { fetchCategories } from "@/store/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  clearCategoryProducts,
  fetchAllProducts,
  fetchProductsByCategory,
  resetProducts,
} from "@/store/productsSlice";
import { Product } from "@/store/types";
import { useEffect, useState } from "react";

export const useProductsListingLogic = () => {
  const dispatch = useAppDispatch();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const { list: categoriesList, loading: categoriesLoading } = useAppSelector(
    (state) => state.categories
  );
  const {
    allProducts,
    categoryProducts,
    loading: productsLoading,
    hasMore,
    skip,
  } = useAppSelector((state) => state.products);

  // Fetch categories on mount
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchAllProducts({ limit: 10, skip: 0 }));
  }, [dispatch]);

  // Build categories list with "All" option
  const categories = ["All", ...categoriesList.map((cat) => cat.name)];

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);

    if (category === "All") {
      // Reset and fetch all products
      dispatch(resetProducts());
      dispatch(fetchAllProducts({ limit: 10, skip: 0 }));
    } else {
      // Find the category slug
      const categorySlug = categoriesList.find(
        (cat) => cat.name === category
      )?.slug;
      if (categorySlug) {
        dispatch(clearCategoryProducts());
        dispatch(
          fetchProductsByCategory({
            category: categorySlug,
            limit: 10,
            skip: 0,
          })
        );
      }
    }
  };

  const loadMore = () => {
    if (productsLoading || !hasMore) return;

    if (selectedCategory === "All") {
      dispatch(fetchAllProducts({ limit: 10, skip }));
    } else {
      const categorySlug = categoriesList.find(
        (cat) => cat.name === selectedCategory
      )?.slug;
      if (categorySlug) {
        dispatch(
          fetchProductsByCategory({ category: categorySlug, limit: 10, skip })
        );
      }
    }
  };

  // Select products based on current category
  const products: Product[] =
    selectedCategory === "All" ? allProducts : categoryProducts;

  return {
    categories,
    selectedCategory,
    handleSelectCategory,
    products,
    loadMore,
    isLoading: categoriesLoading || productsLoading,
  };
};
