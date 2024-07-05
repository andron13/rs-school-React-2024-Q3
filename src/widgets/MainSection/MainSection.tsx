import { useState, useEffect, FC } from "react";

import imgSrc from "§/assets/images/spinner.png";
import { NotFoundSection } from "§features/NotFoundPage";
import fetchCharacters, { ApiResponse, Character } from "§shared/api/api.ts";
import { CharacterList } from "§widgets/CharacterList";

interface MainSectionProps {
  searchString: string;
}

export const MainSection: FC<MainSectionProps> = ({ searchString }) => {
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
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFromServer(searchString).then(() => {});
  }, [searchString]);

  return (
    <main className="bg-gray-200 flex-1 flex flex-col items-center justify-center">
      <div className="max-w-screen-lg mx-auto p-4">
        {error ? (
          <NotFoundSection />
        ) : (
          <>
            {loading ? (
              <img
                src={imgSrc}
                alt="spinner"
                className="w-32 h-32 animate-spin"
              />
            ) : (
              <>
                <p className="mb-4">
                  Search-string:{" "}
                  <span className="font-bold">{searchString || "empty"}</span>
                </p>
                {data && <CharacterList characters={data} />}
              </>
            )}
          </>
        )}
      </div>
    </main>
  );
};
