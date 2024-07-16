import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Character } from "§/shared/types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getCharacters: builder.query<Character[], void>({
      query: () => "/characters",
    }),
  }),
});

export const { useGetCharactersQuery } = apiSlice;
