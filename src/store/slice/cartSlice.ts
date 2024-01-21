import { createSlice } from "@reduxjs/toolkit";
// import {
//   getProductInfo,
// } from "../thunks/fetchproduct";
import { CartType } from "./type";
interface CartState {
  cartData: CartType[];
}

const initialState: CartState = {
  cartData: [
    {
      id: "",
      productId: "",
      img: "",
      name: "",
      size: "",
      spec: "",
      price: 0,
      totalPrice: 0,
      quantity: 0,
    },
  ],
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
