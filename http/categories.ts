import { Category } from "../store/types";

const API_URL = process.env.EXPO_PUBLIC_API_URL || "";

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${API_URL}/products/categories`);
  console.log("fetched categories");
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  const data = await response.json();
  return data;
};
