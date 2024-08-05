import { ApiResponse, Character } from "@/components/shared/types";

const baseUrl: string = "https://rickandmortyapi.com/api";

export async function fetchCharacters(
  keyword: string = "",
): Promise<ApiResponse | number> {
  const api: string = `${baseUrl}/character/${keyword}`;
  const res = await fetch(api);
  if (!res.ok) {
    return res.status;
  }
  return res.json();
}

export async function fetchCharacterByID(
  id: string,
): Promise<Character | number> {
  const api: string = `${baseUrl}/character/${id}`;
  const res = await fetch(api);
  if (!res.ok) {
    return res.status;
  }
  return await res.json();
}
