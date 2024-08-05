import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useTheme } from "@/components/shared/context/useTheme.ts";
import {
  addCharacter,
  removeCharacter,
} from "@/components/shared/store/slices/charactersSlice.ts";
import { RootState } from "@/components/shared/store/store.ts";
import { Character } from "@/components/shared/types";

export const CharacterItem: FC<{ character: Character }> = ({ character }) => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const characters = useSelector(
    (state: RootState) => state.characters.characters,
  );
  const isSelected = characters.some(
    (char: Character) => char.id === character.id,
  );

  const handleCheckboxChange = () => {
    if (isSelected) {
      dispatch(removeCharacter(character));
    } else {
      dispatch(addCharacter(character));
    }
  };
  return (
    <article
      className={`border border-gray-400 p-4 mb-4 rounded-lg ${theme === "light" ? "bg-white text-gray-900" : "bg-gray-800 text-white"}`}
    >
      <div className="flex flex-col items-center gap-2 justify-between h-full">
        <Link href={`details/${character.id}`}>
          <Image
            src={character.image}
            alt={character.name}
            className="mb-2 rounded-lg w-full"
            width={100}
            height={100}
          />
          <h3 className="mt-2 text-xl font-bold">{character.name}</h3>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
        </Link>
        <input
          checked={isSelected}
          onChange={handleCheckboxChange}
          type="checkbox"
          className="form-checkbox h-5 w-5 ring-green-500 bg-gray-200 rounded border-gray-300 focus:ring-2 focus:ring-green-500"
        />
      </div>
    </article>
  );
};
