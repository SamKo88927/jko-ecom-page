import { createSlice } from "@reduxjs/toolkit";
import { CartType } from "./type";
interface CartState {
  cartData: CartType[];
}

const initialState: CartState = {
  cartData: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cartData.push(action.payload);
    },
    removeCartItem: (state, action) => {
      state.cartData = state.cartData.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartData = [];
    },
  },
});
export const { addCart, removeCartItem, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
