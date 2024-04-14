import { createAsyncThunk } from "@reduxjs/toolkit";
import ajax from "../../API/Axios/Ajax/ajax";

export const getMenusFromClient = createAsyncThunk(
  "apiClient/getMenusFromClient",
  async () => {
    return ajax
      .get("/menus")
      .then((response) => response.data)
      .then((data) => data)
      .catch((err) => {
        throw new Error("Something went wrong!", err);
      });
  }
);

export const getProductsFromApiClient = createAsyncThunk(
  "apiClient/getProductsFromApiClient",
  async () => {
    return ajax.get('/')
    .then(response => response.data)
    .then(data => data)
  }
);

export const getArticlesFromClient = createAsyncThunk(
  "apiClient/getArticlesFromClient",
  async () => {
    return ajax
      .get("/articles")
      .then((response) => response.data)
      .then((result) => result);
  }
);

export const getPricesFromClient = createAsyncThunk(
  "apiClient/getPricesFromClient",
  async () => {
    return ajax.get('/prices')
    .then(response => response.data)
    .then(result => result)
  }
);
