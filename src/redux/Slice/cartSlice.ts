// src/redux/Slice/cartSlice.ts
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: Array<Product> = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: Product, quantity: number }>) => {
      const { product, quantity } = action.payload;
      const itemIndex = state.findIndex(item => item.id === product.id);
      if (itemIndex >= 0) {
        state[itemIndex].quantity += quantity;
      } else {
        state.push({ ...product, quantity });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      return state.filter(item => item.id !== id);
    },
    adjustQuantity: (state, action: PayloadAction<{ id: number, quantity: number }>) => {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state[itemIndex].quantity = action.payload.quantity;
      }
    },
    incrementQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state[itemIndex].quantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      if (itemIndex !== -1 && state[itemIndex].quantity > 0) {
        state[itemIndex].quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart, adjustQuantity, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
