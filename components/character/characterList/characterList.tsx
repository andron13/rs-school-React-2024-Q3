import { useSearchParams } from "next/navigation";
import { FC, useMemo, useState } from "react";

import { CharacterItem } from "@/components/character";
import { Pagination } from "@/components/pagination";
import { Character } from "@/components/shared/types";

interface CharacterListProps {
  characters: Character[];
}

export const CharacterList: FC<CharacterListProps> = ({ characters }) => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

  const [currentPage, setCurrentPage] = useState<number>(page);
  const itemsPerPage = 8;

  const totalPages = useMemo(() => {
    return characters ? Math.ceil(characters.length / itemsPerPage) : 1;
  }, [characters]);

  const currentCharacters = useMemo(() => {
    if (!characters) return [];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return characters.slice(startIndex, endIndex);
  }, [characters, currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const url = new URL(window.location.href);
    url.searchParams.set("page", page.toString());
    window.history.pushState({}, "", url.toString());
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentCharacters.map((character) => (
          <CharacterItem key={character.id} character={character} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};
