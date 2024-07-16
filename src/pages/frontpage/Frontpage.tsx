import { useState, useEffect, FC } from "react";

import { Header } from "§/widgets/Header";
import { MainSection } from "§/widgets/MainSection";

export const Frontpage: FC = () => {
  const [searchString, setSearchString] = useState<string>("");

  useEffect(() => {
    const savedSearchString = localStorage.getItem("searchValue") || "";
    setSearchString(savedSearchString);
  }, []);

  const handleSearchClick = (searchValue: string) => {
    setSearchString(searchValue);
  };

  return (
    <div className="flex flex-col flex-1">
      <Header onSearchClick={handleSearchClick} />
      <MainSection searchString={searchString} />
    </div>
  );
};
