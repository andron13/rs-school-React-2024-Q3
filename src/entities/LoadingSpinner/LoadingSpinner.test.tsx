import { render, screen } from "@testing-library/react";

import { LoadingSpinner } from "./LoadingSpinner";

import { spinnerImg } from "§/assets/imgExport.ts";

describe("LoadingSpinner", () => {
  it("renders spinner image correctly", () => {
    render(<LoadingSpinner />);

    const spinnerImage = screen.getByAltText("spinner");

    expect(spinnerImage).toBeTruthy();
    expect(spinnerImage).toHaveAttribute("src", spinnerImg);
    expect(spinnerImage).toHaveClass("w-32 h-32 animate-spin");
  });
});
