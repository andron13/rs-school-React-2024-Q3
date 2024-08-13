import { useState, useEffect } from "react";
import CsvDownloadButton from "react-json-to-csv";
import { useDispatch, useSelector } from "react-redux";

import { selectCharacters } from "~/components/shared/store/selectors/characterSelectors";
import { clearCharacters } from "~/components/shared/store/slices/charactersSlice";
import { Character } from "~/components/shared/types";

export const CharacterInfoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const characters: Character[] = useSelector(selectCharacters);
  const dispatch = useDispatch();
  useEffect(() => {
    if (characters.length > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [characters]);

  const imagesToDisplay = characters
    .slice(0, 4)
    .map((character) => character.image);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full p-4 flex items-center justify-center transition-transform transform ${isVisible ? "translate-y-0 duration-1000" : "translate-y-full"}`}
    >
      <div className="bg-white shadow-lg p-4 rounded">
        <h2 className="text-lg">Characters selected: {characters.length}</h2>
        <p>First 4 characters images:</p>

        <div className="flex space-x-2">
          {imagesToDisplay.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`character-${index}`}
              className="w-10 h-10 rounded-full"
              width={20}
              height={20}
            />
          ))}
        </div>
        <div className="flex space-x-2 items-center  gap-4">
          <button
            onClick={() => dispatch(clearCharacters())}
            className="button-primary"
          >
            Unselect all
          </button>
          <CsvDownloadButton data={characters} className="button-primary">
            Save to CSV
          </CsvDownloadButton>
        </div>
      </div>
    </div>
  );
};
