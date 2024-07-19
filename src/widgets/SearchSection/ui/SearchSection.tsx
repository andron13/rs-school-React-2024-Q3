import { FC, FormEvent, ChangeEvent } from "react";

import { useSearchLocalStorage } from "../hook";

interface SearchSectionProps {
  onSearchClick: (searchValue: string) => void;
}

export const SearchSection: FC<SearchSectionProps> = ({ onSearchClick }) => {
  const [inputValue, setInputValue] = useSearchLocalStorage("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
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
      <button type="submit" className="button-primary">
        Search
      </button>
    </form>
  );
};
