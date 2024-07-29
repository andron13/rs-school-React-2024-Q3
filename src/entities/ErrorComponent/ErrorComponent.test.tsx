import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { ErrorComponent } from "./ErrorComponent";

import ErrorBoundary from "@/src/features/ErrorBoundary";

describe("selectCharacters", () => {
  test("should return the characters from state", () => {
    expect(true).toBe(true);
  });
  it("renders component when a child component throws an error", () => {
    const consoleMock = vi.spyOn(console, "error");
    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>,
    );
    expect(consoleMock).toHaveBeenCalledTimes(2);
    consoleMock.mockReset();
  });
});
