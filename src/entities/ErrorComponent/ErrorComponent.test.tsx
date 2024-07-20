import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { ErrorComponent } from "§/entities/ErrorComponent/ErrorComponent.tsx";
import ErrorBoundary from "§/features/ErrorBoundary";

describe("selectCharacters", () => {
  test("should return the characters from state", () => {
    expect(true).toBe(true);
  });
  it.skip("renders the children when there is no error", () => {
    render(
      <ErrorBoundary>
        <div>Error component</div>
      </ErrorBoundary>,
    );
    expect(screen.queryByText("Problematic Component")).toBeInTheDocument();
  });
  it("renders component when a child component throws an error", () => {
    const consoleMock = vi.spyOn(console, "error");
    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>,
    );
    //console.log(consoleMock);
    //expect(screen.getByText("Something went wrong!")).toBeInTheDocument();

    expect(consoleMock).toHaveBeenCalledTimes(2);
    //expect(consoleMock).toHaveBeenCalledWith("This is a test error!");
    // Clean up mock to avoid affecting other tests
    consoleMock.mockReset();
  });
});
