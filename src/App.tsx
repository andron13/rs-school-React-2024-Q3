import { useState, useEffect, FC } from "react";

import { Footer } from "§entities/Footer";
import { Header } from "§widgets/Header";
import { MainSection } from "§widgets/MainSection";

export const App: FC = () => {
  const [searchString, setSearchString] = useState<string>("");

  useEffect(() => {
    const savedSearchString = localStorage.getItem("searchValue") || "";
    setSearchString(savedSearchString);
  }, []);

  const handleSearchClick = (searchValue: string) => {
    setSearchString(searchValue);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearchClick={handleSearchClick} />
      <MainSection searchString={searchString} />
      <Footer />
    </div>
  );
};
