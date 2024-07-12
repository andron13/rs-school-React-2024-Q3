import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { ErrorComponent } from "§/entities/ErrorComponent/ErrorComponent.tsx";
describe.skip("ErrorComponent", () => {
  it("renders error message correctly", () => {
    render(<ErrorComponent />);

    // Chai Syntax
    expect(screen.getByText("Something went wrong!")).to.exist;

    // Jest Syntax
    expect(screen.getByText("Something went wrong!")).toBeInTheDocument();
  });
});
describe.skip("ErrorComponent", () => {
  it("renders error message correctly", () => {
    // Mock console.error to prevent actual logging during the test
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    render(<ErrorComponent />);

    // Restore the original console.error after rendering
    consoleErrorSpy.mockRestore();

    // Chai Syntax
    expect(screen.getByText("Something went wrong!")).to.exist;

    // Jest Syntax
    expect(screen.getByText("Something went wrong!")).toBeInTheDocument();
  });
});
describe.skip("ErrorComponent", () => {
  it("renders error message correctly", () => {
    // Save the original console.error function
    const originalConsoleError = console.error;

    // Mock console.error to prevent actual logging during the test
    console.error = () => {};

    render(<ErrorComponent />);

    // Restore the original console.error after rendering
    console.error = originalConsoleError;

    // Chai Syntax
    expect(screen.getByText("Something went wrong!")).to.exist;

    // Jest Syntax (for reference)
    // expect(screen.getByText("Something went wrong!")).toBeInTheDocument();
  });
});
