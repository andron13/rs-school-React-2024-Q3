import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, Mock } from "vitest";

import { fetchCharacterByID } from "§/shared/api/api.ts";
import { mockCharacter } from "§/test/mocks/mock.ts";
import { useFetchCharacterById } from "§/widgets/Details/hook/useFetchCharacterById.ts";

vi.mock("§/shared/api/api.ts", () => ({
  fetchCharacterByID: vi.fn(),
}));

describe("useFetchCharacterById", () => {
  it("should set loading to true while fetching", async () => {
    (fetchCharacterByID as Mock).mockResolvedValue(mockCharacter);

    const { result } = renderHook(() => useFetchCharacterById("1"));

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.data).toEqual(mockCharacter);
      expect(result.current.error).toBeNull();
    });
  });

  it("should handle error if fetching fails", async () => {
    const errorMessage = "Failed to fetch";
    (fetchCharacterByID as Mock).mockRejectedValue(new Error(errorMessage));

    const { result } = renderHook(() => useFetchCharacterById("1"));

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.data).toBeNull();
      expect(result.current.error).toBe(errorMessage);
    });
  });
});
