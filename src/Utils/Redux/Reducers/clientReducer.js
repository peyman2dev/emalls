import { createSlice } from "@reduxjs/toolkit";
import {
  getArticlesFromClient,
  getMenusFromClient,
  getPricesFromClient,
  getProductsFromApiClient,
} from "../Ducks/Ducks";

const apiClient = createSlice({
  name: "apiClient",
  initialState: {
    bestSellings: [],
    products: [],
    articles: [],
    users: [],
    menus: [],
    prices: [],
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
      .addCase(getProductsFromApiClient.rejected, (state, action) => {
        console.log(action);
      })
      .addCase(getArticlesFromClient.fulfilled, (state, action) => {
        state.articles = action.payload;
      })
      .addCase(getPricesFromClient.fulfilled, (state, action) => {
        state.prices = action.payload;
      });
  },
});

export default apiClient.reducer;
