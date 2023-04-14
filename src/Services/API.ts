import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const API = createApi({
  reducerPath: "splitApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", token);
      }
      return headers;
    },
  }),
  tagTypes: ["User", "Todo"],
  endpoints: () => ({}),
});
