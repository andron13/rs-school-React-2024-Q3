import { FC, ReactNode } from "react";

import { useFetchCharacters } from "./hook";
import { DataSection } from "./ui";

import { ErrorSection } from "§/entities/ErrorSection";
import { LoadingSpinner } from "§/entities/LoadingSpinner";
import { useTheme } from "§/shared/context/useTheme.ts";

interface MainSectionProps {
  searchString: string;
}

export const MainSection: FC<MainSectionProps> = ({ searchString }) => {
  const { data, error, loading } = useFetchCharacters(searchString);
  const { theme } = useTheme();

  let content: ReactNode;
  if (error) {
    content = <ErrorSection error={error} />;
  } else if (loading) {
    content = <LoadingSpinner />;
  } else {
    content = <DataSection searchString={searchString} data={data} />;
  }

  return (
    <main
      className={`${theme === "light" ? "bg-white text-gray-900" : "bg-gray-800 text-white"}`}
    >
      <div className="max-w-screen-lg mx-auto p-4">{content}</div>
    </main>
  );
};
