import { configureStore } from "@reduxjs/toolkit";

import charactersReducer from "./slices/charactersSlice";
import searchStringReducer from "./slices/searchStringSlice";

import { apiSlice } from "§/shared/store/slices/apiSlice.ts";

export const store = configureStore({
  reducer: {
    searchString: searchStringReducer,
    characters: charactersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
