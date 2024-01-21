import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    type: "",
    isProductModal: false,
  },
  reducers: {
    openProductModal: (state) => {
      state.isProductModal = true;
      // state.type = action.payload;
    },
    closeProductModal: (state) => {
      state.isProductModal = false;
      state.type = "";
    },
  },
});
export const { openProductModal, closeProductModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
