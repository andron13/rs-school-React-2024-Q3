import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Character } from "§/shared/types";
import { DataDetailsUi } from "§/widgets/Details/ui/Details.tsx";

describe("DataDetailsUi", () => {
  it("renders correctly with data", () => {
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

    render(<DataDetailsUi data={character} />);

    expect(screen.getByText(`Character ID: ${character.id}`)).toBeTruthy();
    expect(screen.getByText(`Name: ${character.name}`)).toBeTruthy();
    expect(screen.getByAltText(character.name)).toBeTruthy();
  });

  it("does not render anything when data is null", () => {
    render(<DataDetailsUi data={null} />);

    expect(screen.queryByText("Character ID:")).toBeNull();
    expect(screen.queryByText("Name:")).toBeNull();
    expect(screen.queryByText("Status:")).toBeNull();
    expect(screen.queryByText("Species:")).toBeNull();
    expect(screen.queryByText("Gender:")).toBeNull();
    expect(screen.queryByText("Origin:")).toBeNull();
    expect(screen.queryByText("Location:")).toBeNull();
    expect(screen.queryByText("Episode:")).toBeNull();
    expect(screen.queryByAltText("")).toBeNull();
  });
});
