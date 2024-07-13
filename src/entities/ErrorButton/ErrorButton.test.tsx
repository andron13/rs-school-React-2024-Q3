import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { ErrorButton } from "./ErrorButton.tsx";

describe("ErrorButton", () => {
  // it.only. other test impossible
  it.only("initially does not render ErrorComponent", () => {
    render(<ErrorButton />);

    // Chai Syntax
    expect(screen.queryByTestId("error-component")).to.not.exist;

    // Jest Syntax
    expect(screen.queryByTestId("error-component")).toBeNull();
  });

  it("renders ErrorComponent when button is clicked", () => {
    render(<ErrorButton />);

    // Click the button to toggle the component
    fireEvent.click(screen.getByText("ErrorButton"));

    // Chai Syntax
    expect(screen.getByTestId("Something went wrong!")).to.exist;

    // Jest Syntax
    expect(screen.getByTestId("Something went wrong!")).toBeInTheDocument();
  });

  it("hides ErrorComponent when button is clicked again", () => {
    render(<ErrorButton />);

    // Click the button to toggle the component
    fireEvent.click(screen.getByText("ErrorButton"));

    // Click the button again to hide the component
    fireEvent.click(screen.getByText("ErrorButton"));

    // Chai Syntax
    expect(screen.queryByTestId("error-component")).to.not.exist;

    // Jest Syntax
    expect(screen.queryByTestId("error-component")).toBeNull();
  });
});
