import { combineReducers } from "@reduxjs/toolkit";
import apiClient from "./clientReducer";

const rootReducer = combineReducers({
    client: apiClient
})


export default rootReducer