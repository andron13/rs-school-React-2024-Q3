import { FC, FormEvent, ChangeEvent } from "react";

import { useAppDispatch, useAppSelector } from "§/shared/store/hooks.ts";
import { setSearchString } from "§/shared/store/slices/searchStringSlice.ts";

interface SearchSectionProps {
  onSearchClick: (searchValue: string) => void;
}

export const SearchSection: FC<SearchSectionProps> = ({ onSearchClick }) => {
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
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center space-x-4"
    >
      <input
        className="px-4 py-2 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Input"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="px-10 py-2 rounded-lg bg-white text-blue-500 border border-blue-500 hover:bg-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-500 active:text-white"
      >
        Search
      </button>
    </form>
  );
};
