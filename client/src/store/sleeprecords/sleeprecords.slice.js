import { createSlice } from "@reduxjs/toolkit";
import { getSleeprecords } from "./sleeprecords.actions";

const INITIAL_STATE = {
  loading: false,
  records: null,
  error: null,
  success: false,
};

export const sleepRecordsSlice = createSlice({
  name: "sleeprecords",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [getSleeprecords.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [getSleeprecords.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.records = payload;
    },
    [getSleeprecords.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const sleepRecordsReducer = sleepRecordsSlice.reducer;
