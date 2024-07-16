import { FC } from "react";
import { Link } from "react-router-dom";

import { useTheme } from "§/shared/context/useTheme.ts";
import { Character } from "§/shared/types";

export const CharacterItem: FC<{ character: Character }> = ({ character }) => {
  const { theme } = useTheme();

  return (
    <article
      className={`border border-gray-400 p-4 mb-4 rounded-lg ${theme === "light" ? "bg-white text-gray-900" : "bg-gray-800 text-white"}`}
    >
      <Link to={`details/${character.id}`}>
        <img src={character.image} alt={character.name} />
        <h3>{character.name}</h3>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
      </Link>
    </article>
  );
};
