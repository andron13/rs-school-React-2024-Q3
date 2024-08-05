import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Character } from "@/components/shared/types";

export interface CharactersState {
  characters: Character[];
}

const initialState: CharactersState = {
  characters: [],
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addCharacter(state, action: PayloadAction<Character>) {
      state.characters.push(action.payload);
    },
    removeCharacter(state, action: PayloadAction<Character>) {
      state.characters = state.characters.filter(
        (character) => character.id !== action.payload.id,
      );
    },
    clearCharacters() {
      return initialState;
    },
  },
});

export const { addCharacter, removeCharacter, clearCharacters } =
  charactersSlice.actions;
export default charactersSlice.reducer;
