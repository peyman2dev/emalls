import { createAsyncThunk } from "@reduxjs/toolkit";
import ajax from "../../API/Axios/Ajax/ajax";

export const getMenusFromClient = createAsyncThunk("apiClient/getMenusFromClient", async () => {
  return ajax
    .get("/menus")
    .then((response) => response.data)
    .then((data) => data)
    .catch((err) => {
      throw new Error("Something went wrong!", err);
    });
});

export const getProductsFromApiClient = createAsyncThunk( "apiClient/getProductsFromApiClient", async () => {
    return ajax
    .get("/products")
    .then(response => response.data)
    .then(data => data)
});
