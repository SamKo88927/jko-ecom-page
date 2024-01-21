import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "./type";
import { getProductInfo } from "../thunks/fetchProduct";
interface ProductState {
  productDataFetch: "init" | "fetching" | "success" | "error";
  productData: ProductType;
  isLoading: boolean;
}

const initialState: ProductState = {
  productDataFetch: "init",
  isLoading: false,
  productData: {
    id: "1",
    name: "LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列",
    price: [
      {
        id: "price1",
        name: "sale",
        value: 29.99,
        order: 1,
      },
      {
        id: "price2",
        name: "sale",
        value: 39.99,
        order: 2,
      },
      {
        id: "price3",
        name: "sale",
        value: 49.99,
        order: 3,
      },
      {
        id: "price4",
        name: "discount",
        value: 19.99,
        order: 1,
      },
      {
        id: "price5",
        name: "discount",
        value: 29.99,
        order: 2,
      },
      {
        id: "price6",
        name: "discount",
        value: 39.99,
        order: 3,
      },
    ],
    category: [],
    size: [
      {
        id: "size1",
        name: "Small",
        value: "S",
        quantity: 50,
      },
      {
        id: "size2",
        name: "Medium",
        value: "M",
        quantity: 50,
      },
      {
        id: "size3",
        name: "Large",
        value: "L",
        quantity: 30,
      },
      {
        id: "size3",
        name: "XLarge",
        value: "XL",
        quantity: 30,
      },
      {
        id: "size3",
        name: "XXLarge",
        value: "XXL",
        quantity: 0,
      },
    ],
    color: [
      {
        id: "color1",
        name: "black",
        value: "酷炫黑",
        quantity: 20,
        order: 1,
      },
      {
        id: "color2",
        name: "purple",
        value: "紫旋風",
        quantity: 4,
        order: 2,
      },
      {
        id: "color3",
        name: "red",
        value: "暴風紅",
        quantity: 20,
        order: 2,
      },
      {
        id: "color4",
        name: "yellow",
        value: "耀眼黃",
        quantity: 10,
        order: 2,
      },
      {
        id: "color5",
        name: "random",
        value: "我是第二行選項",
        quantity: 0,
        order: 2,
      },
    ],
    isFeatured: true,
    desc: "靈感來自 90 年代復古球衣，洞洞布料搭載拉克蘭袖設計，專業球衣打造休閒風尚，適合日常生活穿搭。",
    note: "請於訂單備註填寫您需要的號碼，若未填寫將以空白球衣寄出，客製化商品不接受退換貨。",
    isPublished: true,
    createdAt: new Date("2024-01-19T12:00:00Z"),
    updatedAt: new Date("2024-01-20T09:30:00Z"),
    images: [
      {
        id: "image1",
        productId: "1",
        url: "https://shoplineimg.com/5eb233ef887c44005422cc79/63a2fd865df256001a895b12/800x.webp?source_format=jpg",
        order: 1,
      },
      {
        id: "image2",
        productId: "2",
        url: "https://shoplineimg.com/5eb233ef887c44005422cc79/6152cbff7251ea001a0f2776/800x.webp?source_format=jpg",
        order: 2,
      },
      {
        id: "image3",
        productId: "3",
        url: "https://shoplineimg.com/5eb233ef887c44005422cc79/6152e5d1b3f398001d76ae25/800x.webp?source_format=jpg",
        order: 3,
      },
      {
        id: "image4",
        productId: "4",
        url: "https://shoplineimg.com/5eb233ef887c44005422cc79/63a30161651f2e0014dc328c/800x.webp?source_format=jpg",
        order: 4,
      },
    ],
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductInfo.rejected, (state) => {
      state.isLoading = false;
      state.productDataFetch = "error";
    });
    builder.addCase(getProductInfo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      const { data } = action.payload;
      state.productData = data;
    });
  },
});

export const productReducer = productSlice.reducer;
