import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Character } from "§/shared/types";

const charactersSlice = createSlice({
  name: "characters",
  initialState: [] as Character[],
  reducers: {
    setCharacters: (state, action: PayloadAction<Character[]>) =>
      action.payload,
    selectCharacter: (state, action: PayloadAction<string>) => {
      // Logic for selecting character
    },
    deselectCharacter: (state, action: PayloadAction<string>) => {
      // Logic for deselecting character
    },
  },
});

export const { setCharacters, selectCharacter, deselectCharacter } =
  charactersSlice.actions;
export default charactersSlice.reducer;
