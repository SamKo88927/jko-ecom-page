// ** Toolkit imports
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  modalReducer,
  openProductModal,
  closeProductModal,
} from "./slice/modalSlice";
import { addCart, removeCartItem, clearCart } from "./slice/cartSlice";
import { productReducer } from "./slice/productSlice";
import { cartReducer } from "./slice/cartSlice";

// ** Reducers
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    product: productReducer,
    cart: cartReducer,
  },
});
// ** Reducers

// 監測 API
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export {
  openProductModal,
  closeProductModal,
  addCart,
  removeCartItem,
  clearCart,
};

export * from "./slice/type";
