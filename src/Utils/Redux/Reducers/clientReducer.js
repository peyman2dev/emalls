import { createSlice } from "@reduxjs/toolkit";
import { getMenusFromClient, getProductsFromApiClient } from "../Ducks/Ducks";

const apiClient = createSlice({
  name: "apiClient",
  initialState: { products: [],menus: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getMenusFromClient.fulfilled, (state, action) => {
         state.menus = action.payload
    })
    .addCase(getProductsFromApiClient.fulfilled,(state,action) => {
      state.products = action.payload
    })
    .addCase(getProductsFromApiClient.rejected, (state,action) => {
      console.log(action)
    })

  },
});

export default apiClient.reducer;
