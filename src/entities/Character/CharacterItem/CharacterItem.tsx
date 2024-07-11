import React, { FC } from "react";
import { Link } from "react-router-dom";

import { Character } from "§/shared/types";

export const CharacterItem: FC<{ character: Character }> = ({ character }) => {
  const pClass: string = "py-1";
  return (
    <article className="border border-gray-400 p-4 mb-4 rounded-lg">
      <Link to={`details/${character.id}`}>
        <img
          src={character.image}
          alt={character.name}
          className="mb-2 rounded-lg"
        />
        <h3 className="text-xl font-semibold">{character.name}</h3>{" "}
        <p className={pClass}>Species: {character.species}</p>
        <p className={pClass}>Gender: {character.gender}</p>
      </Link>
    </article>
  );
};
