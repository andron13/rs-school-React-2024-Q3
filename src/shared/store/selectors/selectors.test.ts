import { configureStore } from "@reduxjs/toolkit";
import { describe, test, expect } from "vitest";

import { selectCharacters } from "@/src/shared/store/selectors/characterSelectors.ts";
import charactersSlice from "@/src/shared/store/slices/charactersSlice.ts";
import { RootState } from "@/src/shared/store/store.ts";
import { mockCharacters } from "@/src/test/mocks/mock.ts";

const createTestStore = (preloadedState: Partial<RootState>) => {
  return configureStore({
    reducer: {
      // @ts-ignore
      characters: charactersSlice, // Редьюсер для characters
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
