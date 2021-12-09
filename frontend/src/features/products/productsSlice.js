import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productsAPI";

const initialState = {
  status: "idle",
  products: [],
};

export const fetchProductsAsync = createAsyncThunk(
  "products/fetch",
  async () => {
    return await fetchProducts();
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload.products;
      });
  },
});

export default productsSlice.reducer;
