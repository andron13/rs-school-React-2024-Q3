export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

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

export async function fetchCharacterByID(id: string = "1") {
  const api: string = `${baseUrl}/character/${id}`;
  const res = await fetch(api);
  if (!res.ok) {
    return res.status;
  }

  const json = await res.json();
  console.log("test: json", json);

  return json;
}
