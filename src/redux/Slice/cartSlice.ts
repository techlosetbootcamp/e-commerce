import { PayloadAction, createSlice } from '@reduxjs/toolkit';



const initialState: Array<Product> = [];
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action:  PayloadAction<Product> ) => {
            const itemIndex = state.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state[itemIndex].quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action:  PayloadAction<number>) => {
           
           const id=action.payload
           return state.filter((item) => item.id !== id);  
        },
        adjustQuantity: (state,action: PayloadAction<{ id: number; quantity: number }>) => {
            const itemIndex = state.findIndex((item) => item.id === action.payload.id);
          
            if (itemIndex !== -1) {
              state[itemIndex].quantity = action.payload.quantity;
            }
          },
          
          incrementQuantity: (state, action) => {
            const itemIndex = state.findIndex((item) => item.id === action.payload.id);
            if (itemIndex !== -1) {
              state[itemIndex].quantity++; 
            }
          },
          decrementQuantity: (state, action) => {
            const itemIndex = state.findIndex((item) => item.id === action.payload.id);
            if (itemIndex !== -1) {
              state[itemIndex].quantity--; 
            }
          },
    },
});
    // )}}

   export const { addToCart, removeFromCart, adjustQuantity, incrementQuantity, decrementQuantity } = cartSlice.actions;
   export default cartSlice.reducer 