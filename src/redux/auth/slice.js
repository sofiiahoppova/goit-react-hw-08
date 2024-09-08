import { createSlice } from "@reduxjs/toolkit";
import { apiLogin, apiRegister, apirefreshUser } from "./operations";
import { act } from "react";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(apiRegister.pending, (state) => {
        state.error = null;
      })
      .addCase(apiRegister.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(apiRegister.rejected, (state) => {
        state.error = true;
      })

      .addCase(apiLogin.pending, (state) => {
        state.error = null;
      })
      .addCase(apiLogin.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(apiLogin.rejected, (state) => {
        state.error = true;
      })

      .addCase(apirefreshUser.pending, (state) => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(apirefreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.isRefreshing = false;
      })
      .addCase(apirefreshUser.rejected, (state) => {
        state.error = true;
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
