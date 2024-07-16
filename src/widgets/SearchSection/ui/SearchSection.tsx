import { FC, FormEvent, ChangeEvent } from "react";

import { useTheme } from "§/shared/context/useTheme.ts";
import { useAppDispatch, useAppSelector } from "§/shared/store/hooks.ts";
import { setSearchString } from "§/shared/store/slices/searchStringSlice.ts";

interface SearchSectionProps {
  onSearchClick: (searchValue: string) => void;
}

export const SearchSection: FC<SearchSectionProps> = ({ onSearchClick }) => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector((state) => state.searchString);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchString(event.target.value));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearchClick();
  };

  const handleSearchClick = () => {
    onSearchClick(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className=""
        type="text"
        placeholder="Input"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className={`button-primary ${theme === "light" ? "" : "dark"}`}
      >
        Search
      </button>
    </form>
  );
};
