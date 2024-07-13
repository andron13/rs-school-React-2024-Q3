import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { DataSection, DataSectionProps } from "./DataSection";

import { Character } from "§/shared/types"; // Предположим, что это путь к вашим типам персонажей

describe("DataSection Component", () => {
  const charactersMock: Character[] = [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/1"],
      url: "https://rickandmortyapi.com/api/character/1",
      created: "2017-11-04T18:48:46.250Z",
    },
  ];
  it("renders character list when data is provided", () => {
    render(
      <BrowserRouter>
        <DataSection searchString="" data={charactersMock} />
      </BrowserRouter>,
    );

    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
  });

  it("does not render character list when data is null", () => {
    render(
      <BrowserRouter>
        <DataSection searchString="" data={null} />
      </BrowserRouter>,
    );

    expect(screen.queryByText("Rick Sanchez")).not.toBeInTheDocument();
  });
});
