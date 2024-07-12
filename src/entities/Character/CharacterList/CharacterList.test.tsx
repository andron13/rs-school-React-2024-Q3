import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";

import { CharacterList } from "./CharacterList.tsx";

import { Character } from "§/shared/types";

const characters: Character[] = [
  {
    id: 1,
    name: "John Doe",
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
  },
];

describe("CharacterList", () => {
  it("renders a list of characters correctly", () => {
    render(
      <BrowserRouter>
        <CharacterList characters={characters} />
      </BrowserRouter>,
    );

    // Chai Syntax
    expect(screen.getByText("John Doe")).to.exist;
    expect(screen.getByText(/Species: Human/)).to.exist;
    expect(screen.getByText(/Gender: Male/)).to.exist;
    expect(screen.getByAltText("John Doe")).to.exist;

    // Jest Syntax
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText(/Species: Human/)).toBeInTheDocument();
    expect(screen.getByText(/Gender: Male/)).toBeInTheDocument();
    expect(screen.getByAltText("John Doe")).toBeInTheDocument();
  });

  it("handles pagination correctly", () => {
    render(
      <BrowserRouter>
        <CharacterList characters={characters} />
      </BrowserRouter>,
    );

    // Chai Syntax
    expect(screen.getByText("Previous")).to.exist;
    expect(screen.getByText("Next")).to.exist;

    // Jest Syntax
    expect(screen.getByText("Previous")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });
});