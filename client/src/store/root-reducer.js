import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user.slice";
import { authApi } from "../services/auth/authService";
import { sleepRecordsReducer } from "./sleeprecords/sleeprecords.slice";

export const rootReducer = combineReducers({
  user: userReducer,
  sleeprecords: sleepRecordsReducer,
  [authApi.reducerPath]: authApi.reducer,
});
