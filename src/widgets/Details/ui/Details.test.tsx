import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { mockCharacter } from "@/src/test/mocks/mock.ts";
import { DataDetailsUi } from "@/src/widgets/Details/ui/DetailsUI.tsx";

describe("DataDetailsUi", () => {
  it("renders correctly with data", () => {
    render(<DataDetailsUi data={mockCharacter} />);

    expect(screen.getByText(`Character ID: ${mockCharacter.id}`)).toBeTruthy();
    expect(screen.getByText(`Name: ${mockCharacter.name}`)).toBeTruthy();
    expect(screen.getByAltText(mockCharacter.name)).toBeTruthy();
  });

  it("does not render anything when data is null", () => {
    // @ts-ignore
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
