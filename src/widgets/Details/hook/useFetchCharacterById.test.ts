import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { fetchCharacterByID } from "§/shared/api/api.ts";
import { Character } from "§/shared/types";
import { useFetchCharacterById } from "§/widgets/Details/hook/useFetchCharacterById.ts"; // Импортируем waitFor

vi.mock("§/shared/api/api.ts", () => ({
  fetchCharacterByID: vi.fn(),
}));

describe("useFetchCharacterById", () => {
  it("should set loading to true while fetching", async () => {
    const { result } = renderHook(() => useFetchCharacterById("1"));

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
  });

  it("should set data correctly when fetch is successful", async () => {
    const mockCharacter: Character = {
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
    };

    (fetchCharacterByID as jest.Mock).mockResolvedValue(mockCharacter); // Используем jest.Mock

    const { result } = renderHook(() => useFetchCharacterById("1"));

    await waitFor(() => {
      expect(result.current.data).toEqual(mockCharacter);
      expect(result.current.error).toBeNull();
    });
  });

  it("should set error correctly when fetch fails", async () => {
    (fetchCharacterByID as jest.Mock).mockRejectedValue(
      new Error("Fetch failed"),
    ); // Используем jest.Mock

    const { result } = renderHook(() => useFetchCharacterById("1"));

    await waitFor(() => {
      expect(result.current.data).toBeNull();
      expect(result.current.error).toBe("Fetch failed");
    });
  });
});
