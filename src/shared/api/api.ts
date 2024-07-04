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

async function fetchCharacters(
  character: string = "",
): Promise<ApiResponse | number> {
  const api: string = `https://rickandmortyapi.com/api/character/?name=${character}`;

  const res = await fetch(api);
  if (!res.ok) {
    return res.status;
  }
  return res.json();
}

export default fetchCharacters;
