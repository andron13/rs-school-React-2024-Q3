import { render, screen } from "@testing-library/react";

import { ErrorBoundaryHandlerUi } from "./ErrorBoundaryHandlerUI.tsx";

import { errorImg } from "@/src/assets/imgExport.ts";

describe("ErrorBoundaryHandlerUi", () => {
  it("renders error UI correctly", () => {
    render(<ErrorBoundaryHandlerUi />);

    expect(screen.getByText("Oops! Something went wrong.")).toBeInTheDocument();
    expect(
      screen.getByText("Please try refreshing the page or come back later."),
    ).toBeInTheDocument();

    const errorImage = screen.getByAltText("Error illustration");
    expect(errorImage).toBeInTheDocument();
    expect(errorImage).toHaveAttribute("src", errorImg);
    expect(errorImage).toHaveClass("rounded shadow-lg");
  });
});
