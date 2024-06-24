// src/features/productsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export interface Product {
    id: number;
    title: string;
    price: number;
    quantity: number;
    description: string;
    // category: string;
    image: string;
    category: string
  }
  interface ProductsState {
    items: Product[];
    status: 'IDLE' | 'LOADING' | 'SUCCEEDED' | 'FAILED';
    error: string | null;
  }
  const initialState: ProductsState = {
    items: [],
    status: 'IDLE',
    error: null,
  };
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
  return response.data;
});
export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchProductsByCategory',
  async (category: string) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    return await response.json();
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle pending, fulfilled, and rejected states for fetchProducts
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'LOADING';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'SUCCEEDED';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'FAILED';
        state.error = action.error?.message ?? null;
      });

    // Handle pending, fulfilled, and rejected states for fetchProductsByCategory
    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.status = 'LOADING';
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status = 'SUCCEEDED';
        state.items = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.status = 'FAILED';
        state.error = action.error?.message ?? null;
      });
  },
});
// export const { fetchProductsByCategory } = productsSlice.actions;

export default productsSlice.reducer;

