import { store } from "./reducers";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Category Types
export interface Category {
  slug: string;
  name: string;
  url: string;
}

export interface CategoriesState {
  list: Category[];
  loading: boolean;
  error: string | null;
}

// Product Types
export interface ProductReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductDimensions {
  width: number;
  height: number;
  depth: number;
}

export interface ProductMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: ProductDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ProductReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: ProductMeta;
  images: string[];
  thumbnail: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductsState {
  allProducts: Product[];
  categoryProducts: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: string | null;
  currentCategory: string | null;
  hasMore: boolean;
  skip: number;
  total: number;
}

// Cart Types
export interface CartProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
  quantity: number;
}

export interface CartState {
  items: CartProduct[];
  totalItems: number;
  totalPrice: number;
}
