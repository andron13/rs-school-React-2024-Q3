import { screen } from "@testing-library/react";

import { DataSection } from "./DataSection";

import { mockCharacters } from "@/src/test/mocks/mock.ts";
import renderWithProviders from "@/src/test/renderWithProviders.tsx";

describe("DataSection Component", () => {
  it("renders search string correctly", () => {
    renderWithProviders(
      <DataSection searchString="Rick" data={mockCharacters} />,
    );

    expect(screen.getByText("Search-string:")).toBeInTheDocument();
    expect(screen.getByText("Rick")).toBeInTheDocument();
  });

  it("renders 'empty' when search string is empty", () => {
    renderWithProviders(<DataSection searchString="" data={mockCharacters} />);

    expect(screen.getByText("Search-string:")).toBeInTheDocument();
    expect(screen.getByText("empty")).toBeInTheDocument();
  });

  it("renders character list when data is provided", () => {
    renderWithProviders(
      <DataSection searchString="Rick" data={mockCharacters} />,
    );

    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
  });

  it("does not render character list when data is null", () => {
    renderWithProviders(<DataSection searchString="Rick" data={null} />);

    expect(screen.queryByText("Rick Sanchez")).not.toBeInTheDocument();
  });

  it("renders all character fields correctly", () => {
    renderWithProviders(
      <DataSection searchString="Rick" data={mockCharacters} />,
    );

    const character = mockCharacters[0];

    expect(screen.getByText(character.name)).toBeInTheDocument();
  });
});
