import { configureStore } from "@reduxjs/toolkit";

import charactersReducer from "./slices/charactersSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
