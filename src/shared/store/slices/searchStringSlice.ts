import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const searchStringSlice = createSlice({
  name: "searchString",
  initialState: "",
  reducers: {
    setSearchString: (state, action: PayloadAction<string>) => action.payload,
  },
});

export const { setSearchString } = searchStringSlice.actions;
export default searchStringSlice.reducer;
