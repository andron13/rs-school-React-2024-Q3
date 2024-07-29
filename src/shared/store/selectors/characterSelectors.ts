import { RootState } from "@/src/shared/store/store.ts";

export const selectCharacters = (state: RootState) =>
  state.characters.characters;
