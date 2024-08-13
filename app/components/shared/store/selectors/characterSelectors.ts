import { RootState } from "~/components/shared/store/store";

export const selectCharacters = (state: RootState) =>
  state.characters.characters;
