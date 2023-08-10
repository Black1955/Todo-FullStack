import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
const PORT = process.env.REACT_APP_URL;
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
