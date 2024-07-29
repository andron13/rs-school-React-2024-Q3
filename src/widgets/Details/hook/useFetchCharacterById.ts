import { useState, useEffect } from "react";

import { fetchCharacterByID } from "@/src/shared/api/api.ts";
import { Character } from "@/src/shared/types";

export const useFetchCharacterById = (characterId: string) => {
  const [data, setData] = useState<Character | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCharacterById = async (id: string) => {
    setLoading(true);
    try {
      const response: Character | number = await fetchCharacterByID(id);
      if (typeof response === "number") {
        throw new Error(`Failed to fetch. Status code: ${response}`);
      }
      setData(response as Character);
      setError(null);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (characterId) {
      fetchCharacterById(characterId).then(() => {});
    }
  }, [characterId]);

  return { data, error, loading };
};
