import { useState, useEffect, Dispatch, SetStateAction } from "react";

type UseSearchLocalStorage = (
  initialValue: string,
) => [string, (value: string) => void];

/**
 * Custom hook for managing a search input value stored in localStorage.
 * @param initialValue The initial value to set for the search input.
 * @returns A tuple containing the current search value and a function to set the search value.
 */
export const useSearchLocalStorage: UseSearchLocalStorage = (
  initialValue = "",
): [string, Dispatch<SetStateAction<string>>] => {
  const localStorageKey: string = "searchValue";
  const [inputValue, setInputValue] = useState<string>(initialValue);

  useEffect(() => {
    const storedValue = localStorage.getItem(localStorageKey);
    if (storedValue !== null) {
      setInputValue(storedValue);
    }
  }, []);

  const setSearchValue = (value: string) => {
    setInputValue(value);
    localStorage.setItem(localStorageKey, value);
  };

  // @ts-ignore
  return [inputValue, setSearchValue];
};
