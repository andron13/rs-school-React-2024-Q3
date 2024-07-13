import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";

import { CharacterItem } from "§/entities/Character";
import { Character } from "§/shared/types";

const character: Character = {
  id: 1,
  name: "John Doe",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth",
    url: "https://example.com/origin",
  },
  location: {
    name: "Earth",
    url: "https://example.com/location",
  },
  image: "https://via.placeholder.com/150",
  episode: ["https://example.com/episode1"],
  url: "https://example.com/character",
  created: "2024-07-12T12:34:56.789Z",
};

describe("CharacterItem", () => {
  it("renders character details correctly", () => {
    render(
      <BrowserRouter>
        <CharacterItem character={character} />
      </BrowserRouter>,
    );

    // Verifies the presence of the character's name
    expect(screen.getByText("John Doe")).to.exist; // Chai
    // Verifies the presence of the character's species
    expect(screen.getByText(/Species: Human/)).toBeInTheDocument();
    // Verifies the presence of the character's gender
    expect(screen.getByText(/Gender: Male/)).toBeInTheDocument();
    // Verifies the presence of the character's image
    expect(screen.getByAltText("John Doe")).toBeInTheDocument();
  });
});
