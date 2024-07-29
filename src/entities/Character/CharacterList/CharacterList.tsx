import { FC, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CharacterItem } from "../";

import { Character } from "@/src/shared/types";
import { Pagination } from "@/src/widgets/Pagination";

export const CharacterList: FC<{ characters: Character[] }> = ({
  characters,
}) => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
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
    navigate(`?page=${page}`);
  };

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentCharacters.map((character) => (
          <CharacterItem key={character.id} character={character} />
        ))}
      </section>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};
