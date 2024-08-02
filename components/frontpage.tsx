"use client";
import { useState, useEffect, FC } from "react";

import { Footer } from "@/components/footer.tsx";
import { Header } from "@/components/header.tsx";
import { MainSection } from "@/components/mainSection/mainSection.tsx";

const FrontPage: FC = () => {
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

export default FrontPage;
