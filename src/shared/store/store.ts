import { configureStore } from "@reduxjs/toolkit";

import countryReducer from "./countrySlice";

export const store = configureStore({
  reducer: {
    country: countryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
