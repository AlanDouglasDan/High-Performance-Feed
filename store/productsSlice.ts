import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllProducts,
  getProductById,
  getProductsByCategory,
} from "../http/products";
import { ProductsState } from "./types";

const initialState: ProductsState = {
  allProducts: [],
  categoryProducts: [],
  selectedProduct: null,
  loading: false,
  error: null,
  currentCategory: null,
  hasMore: true,
  skip: 0,
  total: 0,
};

// Fetch all products with pagination
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async (
    { limit = 10, skip = 0 }: { limit?: number; skip?: number },
    { rejectWithValue }
  ) => {
    try {
      const data = await getAllProducts({ limit, skip });
      return data;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  }
);

// Fetch single product by ID
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id: number, { rejectWithValue }) => {
    try {
      const data = await getProductById(id);
      return data;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  }
);

// Fetch products by category with pagination
export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (
    {
      category,
      limit = 10,
      skip = 0,
    }: { category: string; limit?: number; skip?: number },
    { rejectWithValue }
  ) => {
    try {
      const data = await getProductsByCategory(category, { limit, skip });
      return { data, category };
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
    clearCategoryProducts: (state) => {
      state.categoryProducts = [];
      state.currentCategory = null;
      state.skip = 0;
      state.hasMore = true;
    },
    resetProducts: (state) => {
      state.allProducts = [];
      state.skip = 0;
      state.hasMore = true;
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    // Fetch all products
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        // Append new products for infinite scroll
        if (action.payload.skip === 0) {
          state.allProducts = action.payload.products;
        } else {
          state.allProducts = [
            ...state.allProducts,
            ...action.payload.products,
          ];
        }
        state.skip = action.payload.skip + action.payload.products.length;
        state.total = action.payload.total;
        state.hasMore = state.skip < action.payload.total;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Fetch single product
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Fetch products by category
    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        // Append new products for infinite scroll
        if (action.payload.data.skip === 0) {
          state.categoryProducts = action.payload.data.products;
        } else {
          state.categoryProducts = [
            ...state.categoryProducts,
            ...action.payload.data.products,
          ];
        }
        state.currentCategory = action.payload.category;
        state.skip =
          action.payload.data.skip + action.payload.data.products.length;
        state.total = action.payload.data.total;
        state.hasMore = state.skip < action.payload.data.total;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearSelectedProduct, clearCategoryProducts, resetProducts } =
  productsSlice.actions;

export default productsSlice.reducer;
