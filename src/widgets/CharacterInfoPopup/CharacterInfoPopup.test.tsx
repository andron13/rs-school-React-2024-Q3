import { configureStore } from "@reduxjs/toolkit";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, it, expect, vi } from "vitest";

import { CharacterInfoPopup } from "./CharacterInfoPopup";

import charactersReducer from "§/shared/store/slices/charactersSlice";

vi.mock("§/shared/store/selectors", () => ({
  selectCharacters: () => [{ image: "image1.png" }],
}));

const mockStore = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});

describe.skip("CharacterInfoPopup", () => {
  it("should render correctly when there is at least one character", async () => {
    render(
      <Provider store={mockStore}>
        <CharacterInfoPopup />
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getByText(/Characters selected:/)).toBeVisible();
    });
  });
});
