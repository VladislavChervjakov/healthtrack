import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user.slice";
import { authApi } from "../services/auth/authService";

export const rootReducer = combineReducers({
  user: userReducer,
  [authApi.reducerPath]: authApi.reducer,
});
