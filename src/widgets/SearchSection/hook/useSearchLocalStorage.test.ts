import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";

import { useSearchLocalStorage } from "@/src/widgets/SearchSection/hook/useSearchLocalStorage.ts";

beforeEach(() => {
  vi.restoreAllMocks();
  vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => null);
  vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {});
});

describe("useSearchLocalStorage", () => {
  it("should initialize with the provided initial value", () => {
    const { result } = renderHook(() => useSearchLocalStorage("initial"));
    expect(result.current[0]).toBe("initial");
  });

  it("should retrieve the value from localStorage on mount", () => {
    vi.spyOn(Storage.prototype, "getItem").mockReturnValue("storedValue");
    const { result } = renderHook(() => useSearchLocalStorage("initial"));
    expect(result.current[0]).toBe("storedValue");
  });

  it.skip("should update localStorage when setting a new value", () => {
    const { result } = renderHook(() => useSearchLocalStorage("initial"));
    act(() => {
      result.current[1]("newValue");
    });
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "searchValue",
      "newValue",
    );
    expect(result.current[0]).toBe("newValue");
  });

  it("should keep the value updated between renders", () => {
    const { result, rerender } = renderHook(() =>
      useSearchLocalStorage("initial"),
    );

    act(() => {
      result.current[1]("newValue");
    });

    rerender();
    expect(result.current[0]).toBe("newValue");
  });
});
