import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { SearchSection } from "./SearchSection.tsx";

describe("SearchSection", () => {
  it("renders correctly", () => {
    render(<SearchSection onSearchClick={() => {}} />);

    expect(screen.getByPlaceholderText("Input")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  it("allows the user to input text", () => {
    render(<SearchSection onSearchClick={() => {}} />);

    const input = screen.getByPlaceholderText("Input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });

  it("calls onSearchClick with the correct value when search button is clicked", () => {
    const onSearchClickMock = vi.fn();

    render(<SearchSection onSearchClick={onSearchClickMock} />);

    const input = screen.getByPlaceholderText("Input");
    const button = screen.getByText("Search");

    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.click(button);
    expect(onSearchClickMock).toHaveBeenCalledWith("test");
  });
});
