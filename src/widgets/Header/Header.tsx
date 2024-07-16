import { FC } from "react";

import { Logo } from "§/entities/Logo";
import { useTheme } from "§/shared/context/useTheme.ts";
import { SearchSection } from "§/widgets/SearchSection/ui";

interface HeaderProps {
  onSearchClick: (searchValue: string) => void;
}

export const Header: FC<HeaderProps> = ({ onSearchClick }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`${theme === "light" ? "bg-blue-500" : "bg-amber-800"}`}>
      <Logo />
      <SearchSection onSearchClick={onSearchClick} />
      <button
        onClick={toggleTheme}
        className={`button-primary ${theme === "light" ? "" : "dark"}`}
      >
        Toggle Theme
      </button>
    </header>
  );
};
