import { createAsyncThunk } from "@reduxjs/toolkit";
import ajax from "../../API/Axios/Ajax/ajax";

export const getMenusFromClient = createAsyncThunk(
    "ajax", async () => {
    return ajax.get("/menus")
    .then(response => response.data)
    .then(data => data)
    .catch(err => {
        throw new Error("Something went wrong!", err)
    })
});




export const getProductsFromClient = createAsyncThunk(
    async () => {
        return ajax.get('/products',)
    }
)