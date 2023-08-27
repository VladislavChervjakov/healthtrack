import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authApi } from "../services/auth/authService";
import { rootReducer } from "./root-reducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
