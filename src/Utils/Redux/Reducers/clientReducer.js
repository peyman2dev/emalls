import { createSlice } from "@reduxjs/toolkit";
import { getMenusFromClient } from "../Ducks/Ducks";

const apiClient = createSlice({
  name: "apiClient",
  initialState: { menus: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMenusFromClient.fulfilled, (state, action) => {
         state.menus = action.payload
    });
  },
});

export default apiClient.reducer;
