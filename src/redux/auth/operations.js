import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

const SetAuthHeaders = (token) => {
  instance.defaults.headers.common.Authorization = `Baerer ${token}`;
};

export const apiRegister = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const { data } = await instance.post("/users/signup", formData);
      SetAuthHeaders(data.token);
      console.log("register data: ", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const apiLogin = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const { data } = await instance.post("/users/login", formData);
      SetAuthHeaders(data.token);
      console.log("login data: ", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const apiLogout = createAsyncThunk(
  "auth/logout",
  async (formData, thunkAPI) => {
    try {
      const { data } = await instance.post("/users/logout", formData);
      console.log("log out data: ", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const apirefreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      SetAuthHeaders(token);
      const { data } = await instance.get("/users/current");
      console.log("Refresh data: ", data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue();
    }
  }
);
