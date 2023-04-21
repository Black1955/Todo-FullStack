import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
const PORT = "http://localhost:5000/";
export const API = createApi({
  reducerPath: "splitApi",
  baseQuery: fetchBaseQuery({
    baseUrl: PORT,
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
