import { RootState } from "§/shared/store/store.ts";

export const selectCharacters = (state: RootState) =>
  state.characters.characters;
