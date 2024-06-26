import { createAsyncThunk } from "@reduxjs/toolkit";
import ajax from "../../API/Axios/Ajax/ajax";
import axios from "axios";

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
    return ajax
      .get("/")
      .then((response) => response.data)
      .then((data) => data);
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
    return ajax
      .get("/prices")
      .then((response) => response.data)
      .then((result) => result);
  }
);

export const searchFromClient = createAsyncThunk(
  "apiClient/searchFromClient",
  async ({ query }) => {
    return ajax
      .get("search/?q=" + query)
      .then((response) => response.data)
      .then((resolve) => resolve);
  }
);

export const getSellerInfoFromClient = createAsyncThunk(
  "apiClient/getSellerInfoFromClient",
  async ({ sellerID }) => {
    return axios
      .get(`https://api.digikala.com/v1/sellers/${sellerID}/`)
      .then((response) => response.data)
      .then((resolve) => resolve);
  }
);

export const getProductInfoFromClient = createAsyncThunk(
  "apiClient/getProductInfoFromClient",
  async ({ productID }) => {
    return axios
      .get(`https://api.digikala.com/v2/product/${productID}/`)
      .then((req) => req.data)
      .then((result) => result);
  }
);
