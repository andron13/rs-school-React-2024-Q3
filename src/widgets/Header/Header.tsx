import { FC } from "react";

import { Logo } from "§/entities/Logo";
import { SearchSection } from "§/widgets/SearchSection/ui";

interface HeaderProps {
  onSearchClick: (searchValue: string) => void;
}

export const Header: FC<HeaderProps> = ({ onSearchClick }) => {
  return (
    <section className="bg-blue-500 h-56 flex items-center justify-evenly text-center text-white">
      <Logo />
      <SearchSection onSearchClick={onSearchClick} />
    </section>
  );
};
