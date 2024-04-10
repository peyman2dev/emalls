import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiClient from "../../API/Axios/ApiClient/ApiClient";

export const getMenusFromClient = createAsyncThunk(
    "apiClient", async () => {
    return ApiClient.get("/menus")
    .then(response => response.data)
    .then(data => data)
    .catch(err => {
        throw new Error("Something went wrong!", err)
    })
});

