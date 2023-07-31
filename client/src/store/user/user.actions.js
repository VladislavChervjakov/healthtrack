import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:8000/v1";

export const registerUser = createAsyncThunk(
  "user/reginster",
  async ({ userName, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios.post(
        `${API_URL}/auth/signup`,
        { name: userName, email, password },
        config
      );
    } catch (error) {
      if (error.response && error.response.error) {
        return rejectWithValue(error.response.error);
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${API_URL}/auth/login`,
        { email, password },
        config
      );

      return data;
    } catch (error) {
      if (error.response && error.response.error) {
        return rejectWithValue(error.response.error);
      }
    }
  }
);
