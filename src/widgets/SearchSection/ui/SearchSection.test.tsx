import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { SearchSection } from "./SearchSection.tsx";

describe.skip("SearchSection", () => {
  it("renders correctly", () => {
    render(<SearchSection onSearchClick={() => {}} />);

    // Check for the presence of the input field
    expect(screen.getByPlaceholderText("Input")).toBeInTheDocument();

    // Check for the presence of the button
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  it("allows the user to input text", () => {
    render(<SearchSection onSearchClick={() => {}} />);

    const input = screen.getByPlaceholderText("Input") as HTMLInputElement;

    // Enter text into the input field
    fireEvent.change(input, { target: { value: "test" } });

    // Check that the text appears in the input field
    expect(input.value).toBe("test");
  });

  it("calls onSearchClick with the correct value when search button is clicked", () => {
    const onSearchClickMock = vi.fn();

    render(<SearchSection onSearchClick={onSearchClickMock} />);

    const input = screen.getByPlaceholderText("Input");
    const button = screen.getByText("Search");

    // Enter text into the input field
    fireEvent.change(input, { target: { value: "test" } });

    // Click the button
    fireEvent.click(button);

    // Check that the mock function was called with the correct value
    expect(onSearchClickMock).toHaveBeenCalledWith("test");
  });
});
