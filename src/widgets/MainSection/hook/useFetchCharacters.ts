import { useState, useEffect } from "react";

import { fetchCharacters } from "§/shared/api/api.ts";
import { ApiResponse, Character } from "§/shared/types";

export const useFetchCharacters = (searchString: string) => {
  const [data, setData] = useState<Character[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchDataFromServer = async (result: string) => {
    setLoading(true);
    const searchKeywordByName = `?name=${result}`;
    try {
      const response: ApiResponse | number =
        await fetchCharacters(searchKeywordByName);
      if (typeof response === "number") {
        throw new Error(`Failed to fetch. Status code: ${response}`);
      }
      setData(response.results);
      setError(null);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFromServer(searchString).then(() => {});
  }, [searchString]);

  return { data, error, loading };
};
