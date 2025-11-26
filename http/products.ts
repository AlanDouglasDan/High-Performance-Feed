import { Product, ProductsResponse } from "../store/types";

const API_URL = process.env.EXPO_PUBLIC_API_URL || "";

export interface FetchProductsParams {
  limit?: number;
  skip?: number;
}

export const getAllProducts = async (
  params: FetchProductsParams = {}
): Promise<ProductsResponse> => {
  const { limit = 10, skip = 0 } = params;
  const response = await fetch(
    `${API_URL}/products?limit=${limit}&skip=${skip}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const response = await fetch(`${API_URL}/products/${id}`);
  console.log("fetched single product");
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  const data = await response.json();
  return data;
};

export const getProductsByCategory = async (
  category: string,
  params: FetchProductsParams = {}
): Promise<ProductsResponse> => {
  const { limit = 10, skip = 0 } = params;
  const response = await fetch(
    `${API_URL}/products/category/${category}?limit=${limit}&skip=${skip}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products by category");
  }
  const data = await response.json();
  return data;
};
