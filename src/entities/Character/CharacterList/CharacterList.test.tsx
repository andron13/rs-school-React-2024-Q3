import { screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import { CharacterList } from "./CharacterList.tsx";

import { Character } from "§/shared/types";
import renderWithProviders from "§/test/renderWithProviders.tsx";

const characters: Character[] = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Character ${i + 1}`,
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: { name: "Earth", url: "https://example.com/origin" },
  location: { name: "Earth", url: "https://example.com/location" },
  image: "https://via.placeholder.com/150",
  episode: ["https://example.com/episode1"],
  url: "https://example.com/character",
  created: "2024-07-12T12:34:56.789Z",
}));

describe("CharacterList", () => {
  it("renders a list of characters correctly", () => {
    renderWithProviders(<CharacterList characters={characters} />);

    const speciesElements = screen.queryAllByText(/Species: Human/);
    expect(speciesElements.length).toBe(8);
  });

  it("handles pagination correctly", async () => {
    renderWithProviders(<CharacterList characters={characters} />);
    expect(screen.getByText("Previous")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();

    expect(screen.getByText("Character 1")).toBeInTheDocument();
    expect(screen.queryByText("Character 9")).not.toBeInTheDocument();

    await userEvent.click(screen.getByText("Next"));
  });
});
