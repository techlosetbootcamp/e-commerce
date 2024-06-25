import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




  const initialState: ProductsState = {
    items: [],
    status: 'IDLE',
    error: null,
  };



  export const fetchProductsByCategory = createAsyncThunk(
    'products/fetchProductsByCategory',
    async (category: string) => {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      return await response.json();
    }
  );
const categoryProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    
    extraReducers: (builder) => {

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
}

)




export default categoryProductsSlice