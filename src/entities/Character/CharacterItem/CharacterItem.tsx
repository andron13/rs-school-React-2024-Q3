import { FC } from "react";
import { Link } from "react-router-dom";

import { Character } from "§/shared/api/api.ts";

interface CharacterItemProps {
  character: Character;
}

export const CharacterItem: FC<CharacterItemProps> = ({ character }) => {
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
        {/*<p className={pClass}>Status: {character.status}</p>*/}
        <p className={pClass}>Species: {character.species}</p>
        <p className={pClass}>Gender: {character.gender}</p>
        {/*<p className={pClass}>Origin: {character.origin.name}</p>*/}
        {/*<p className={pClass}>Location: {character.location.name}</p>*/}
        {/*<p className={pClass}>Number of Episodes: {character.episode.length}</p>*/}
      </Link>
    </article>
  );
};
