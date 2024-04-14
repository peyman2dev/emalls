import { createSlice } from "@reduxjs/toolkit";
import {
  getArticlesFromClient,
  getMenusFromClient,
  getPricesFromClient,
  getProductsFromApiClient,
  searchFromClient,
} from "../Ducks/Ducks";

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
        console.log(action.payload.data)
        state.search = action.payload.data;
      });
  },
});

export default apiClient.reducer;
