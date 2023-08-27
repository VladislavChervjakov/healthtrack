import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/v1/",
    prepareHeaders: (headers, { getState }) => {},
    endpoints: () => ({}),
  }),
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: () => ({
        url: "auth/user",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetUserDetailsQuery } = authApi;
