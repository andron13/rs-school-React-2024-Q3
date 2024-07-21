import { render, screen } from "@testing-library/react";
import React, { FC } from "react";
import { describe, it, expect } from "vitest";

import ErrorBoundary from "./ErrorBoundary";

vi.mock("./ui", () => ({
  ErrorBoundaryHandlerUi: () => <div>Error Boundary Handler UI</div>,
}));

const ErrorThrowingComponent: FC = () => {
  throw new Error("Test error");
};

describe("ErrorBoundary", () => {
  it("catches errors and displays the ErrorBoundaryHandlerUi component", () => {
    const originalConsoleError = console.error;
    console.error = () => {};

    render(
      <ErrorBoundary>
        <ErrorThrowingComponent />
      </ErrorBoundary>,
    );

    console.error = originalConsoleError;

    expect(screen.getByText("Error Boundary Handler UI")).toBeInTheDocument();
  });

  it("renders children when no error is thrown", () => {
    render(
      <ErrorBoundary>
        <div>Child Component</div>
      </ErrorBoundary>,
    );

    expect(screen.getByText("Child Component")).toBeInTheDocument();
  });
});
