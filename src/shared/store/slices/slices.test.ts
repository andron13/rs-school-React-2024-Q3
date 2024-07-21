import { configureStore, Store } from "@reduxjs/toolkit";
import { describe, test, expect } from "vitest";

import { selectCharacters } from "§/shared/store/selectors/characterSelectors.ts";
import charactersSlice from "§/shared/store/slices/charactersSlice.ts";
import { RootState } from "§/shared/store/store.ts";
import { mockCharacters } from "§/test/mocks/mock.ts";

const createTestStore = (
  preloadedState: Partial<RootState>,
): Store<RootState> => {
  return configureStore({
    reducer: {
      characters: charactersSlice,
    },
    preloadedState,
  });
};

describe("selectCharacters", () => {
  test("should return the characters from state", () => {
    const initialState: RootState = {
      characters: {
        characters: [...mockCharacters],
      },
    };

    const store = createTestStore(initialState);

    const state = store.getState();
    const result = selectCharacters(state);

    expect(result).toEqual(initialState.characters.characters);
  });
});
