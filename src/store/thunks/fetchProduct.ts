import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getProductInfo = createAsyncThunk("api/product/", async () => {
  const resp = await axios.get(`${process.env.PUBLIC_API}/api/product/`);
  return resp;
});

export { getProductInfo };
