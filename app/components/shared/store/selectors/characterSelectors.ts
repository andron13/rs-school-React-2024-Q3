import { RootState } from "@/components/shared/store/store.ts";

export const selectCharacters = (state: RootState) =>
  state.characters.characters;
