import { FC, useMemo, useState } from "react";

import { CharacterItem } from "../";

import { Character } from "§/shared/api/api.ts";
import { Pagination } from "§/widgets/Pagination";

interface CharacterListProps {
  characters: Character[];
}

export const CharacterList: FC<CharacterListProps> = ({ characters }) => {
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
        onPageChange={setCurrentPage}
      />
    </>
  );
};
