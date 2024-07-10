import { useState, useEffect } from "react";

import fetchCharacters, { ApiResponse, Character } from "§/shared/api/api.ts";

export const useFetchCharacters = (searchString: string) => {
  const [data, setData] = useState<Character[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchDataFromServer = async (result: string) => {
    setLoading(true);
    try {
      const response: ApiResponse | number = await fetchCharacters(result);
      if (typeof response === "number") {
        throw new Error(`Failed to fetch. Status code: ${response}`);
      }
      setTimeout(() => {
        setData(response.results);
        setError(null);
        setLoading(false);
      }, 500);
    } catch (error) {
      setError((error as Error).message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFromServer(searchString).then(() => {});
  }, [searchString]);

  return { data, error, loading };
};
