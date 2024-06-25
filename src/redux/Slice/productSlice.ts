// src/features/productsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


 
  const initialState: ProductsState = {
    items: [],
    status: 'IDLE',
    error: null,
  };
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
  return response.data;
});


const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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

  
  },
});

export default productsSlice.reducer;

