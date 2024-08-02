import { useState, useEffect, FC } from "react";

import { Header } from "@/components/header.tsx";
import { MainSection } from "@/components/mainSection/mainSection.tsx";

const Index: FC = () => {
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
    </div>
  );
};

export default Index;
