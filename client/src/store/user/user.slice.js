import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./user.actions";

const INITIAL_STATE = {
  loading: false,
  currentUser: null,
  userToken: null,
  error: null,
  success: false,
  fetching: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    setIsFetching(state, action) {
      state.fetching = action.payload;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.fetching = false;
      state.currentUser = payload;
      state.userToken = payload.token;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { setCurrentUser, setIsFetching } = userSlice.actions;

export const userReducer = userSlice.reducer;
