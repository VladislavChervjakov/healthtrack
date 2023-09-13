import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8000/v1";

export const getSleeprecords = createAsyncThunk(
  "sleeprecords/getSleeprecords",
  async () => {
    try {
      const config = {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.get(`${API_URL}/sleeprecords`, config);

      console.log(data);

      return data;
    } catch (error) {
      return error.response.data.err;
    }
  }
);
