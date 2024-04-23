import { createSlice } from "@reduxjs/toolkit";
import {
  getArticlesFromClient,
  getMenusFromClient,
  getPricesFromClient,
  getProductInfoFromClient,
  getProductsFromApiClient,
  getSellerInfoFromClient,
  searchFromClient,
} from "../Ducks/Ducks";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  timer: 3000,
  position: "top-start",
  timerProgressBar: true,
});

const apiClient = createSlice({
  name: "apiClient",
  initialState: {
    bestSellings: [],
    products: [],
    articles: [],
    product: {},
    users: [],
    menus: [],
    prices: [],
    search: [],
    seller: [],
    isLoading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMenusFromClient.fulfilled, (state, action) => {
        state.menus = action.payload;
      })
      .addCase(getProductsFromApiClient.fulfilled, (state, action) => {
        state.bestSellings = action.payload.data.best_selling_products;
        state.products = action.payload;
      })
      .addCase(getProductsFromApiClient.rejected, (state, action) => {})
      .addCase(getArticlesFromClient.fulfilled, (state, action) => {
        state.articles = action.payload;
      })
      .addCase(getPricesFromClient.fulfilled, (state, action) => {
        state.prices = action.payload;
      })
      .addCase(searchFromClient.fulfilled, (state, action) => {
        state.search = action.payload.data;
      })
      .addCase(getSellerInfoFromClient.fulfilled, (state, action) => {
        state.seller = action.payload.data;
      })
      .addCase(getProductInfoFromClient.fulfilled, (state, action) => {
        state.product = action.payload.data;
        state.isLoading = false
      })
      .addCase(getProductInfoFromClient.rejected, (state, action) => {
        Toast.fire({
          title: "خطایی رخ داده ست ...",
          icon: "error",
        });
      });
  },
});

export default apiClient.reducer;
