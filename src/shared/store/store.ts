import { configureStore } from "@reduxjs/toolkit";

import charactersReducer from "./slices/charactersSlice";
// import searchStringReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    // searchString: searchStringReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
