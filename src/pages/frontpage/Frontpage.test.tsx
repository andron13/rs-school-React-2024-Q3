import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";

import { Frontpage } from "./Frontpage";

vi.mock("§/widgets/Header", () => ({
  Header: ({ onSearchClick }: { onSearchClick: (value: string) => void }) => (
    <button onClick={() => onSearchClick("test search")}>Search</button>
  ),
}));

vi.mock("§/widgets/MainSection", () => ({
  MainSection: ({ searchString }: { searchString: string }) => (
    <div>{searchString}</div>
  ),
}));

describe("Frontpage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should render correctly and display the search string from localStorage", () => {
    localStorage.setItem("searchValue", "stored search");
    render(<Frontpage />);
    expect(screen.getByText("stored search")).toBeInTheDocument();
  });

  it("should update search string when search button is clicked", () => {
    render(<Frontpage />);
    fireEvent.click(screen.getByText("Search"));
    expect(screen.getByText("test search")).toBeInTheDocument();
  });
});
