import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8000/v1";

export const getSleeprecords = createAsyncThunk(
  "sleeprecords/getSleeprecords",
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.get(`${API_URL}/sleeprecords`, config);

      return data;
    } catch (error) {
      if (error.response.data && error.response.data.err) {
        return rejectWithValue(error.response.data.err);
      } else {
        return rejectWithValue(error);
      }
    }
  }
);
