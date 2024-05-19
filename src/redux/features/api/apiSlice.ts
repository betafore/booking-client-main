import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_API_URL
        : // "http://localhost:5000/api/v1/",
          process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: [""],

  endpoints: () => ({}),
});
