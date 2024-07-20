import { renderHook, waitFor } from "@testing-library/react"; // Импортируем waitFor
import { describe, it, expect, vi } from "vitest";

import { fetchCharacters } from "§/shared/api/api.ts";
import { ApiResponse, Character } from "§/shared/types";
import { useFetchCharacters } from "§/widgets/MainSection/hook/useFetchCharacters.ts";

vi.mock("§/shared/api/api.ts", () => ({
  fetchCharacters: vi.fn(),
}));

describe("useFetchCharacters", () => {
  it("should set loading to true while fetching", async () => {
    const { result } = renderHook(() => useFetchCharacters("Rick"));

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
  });

  it("should set data correctly when fetch is successful", async () => {
    const mockData: ApiResponse = {
      info: {
        count: 1,
        pages: 1,
        next: null,
        prev: null,
      },
      results: [
        {
          id: 1,
          name: "Rick Sanchez",
          status: "Alive",
          species: "Human",
          type: "",
          gender: "Male",
          origin: { name: "", url: "" },
          location: { name: "", url: "" },
          image: "",
          episode: [],
          url: "",
          created: "",
        },
      ] as Character[],
    };

    (fetchCharacters as jest.Mock).mockResolvedValue(mockData); // jest.Mock

    const { result } = renderHook(() => useFetchCharacters("Rick"));

    await waitFor(() => {
      expect(result.current.data).toEqual(mockData.results);
      expect(result.current.error).toBeNull();
    });
  });

  it("should set error correctly when fetch fails", async () => {
    (fetchCharacters as vi.Mock).mockRejectedValue(new Error("Fetch failed"));

    const { result } = renderHook(() => useFetchCharacters("Rick"));

    await waitFor(() => {
      expect(result.current.data).toBeNull();
      expect(result.current.error).toBe("Fetch failed");
    });
  });
});
