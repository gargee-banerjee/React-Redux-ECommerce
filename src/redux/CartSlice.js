import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [], totalCartItems: 0, totalCartAmount: 0 },
  reducers: {
    refreshCart: (state, action) => {
      state.cartItems = action.payload.cart.line_items;
      state.totalCartItems = action.payload.cart.total_items;
      state.totalCartAmount = action.payload.cart.subtotal.formatted;
    },
    addToCart(state, action) {
      state.cartItems.push(action.payload.cartItem.line_items);
      state.totalCartItems = action.payload.cartItem.total_items;
    },
    
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
