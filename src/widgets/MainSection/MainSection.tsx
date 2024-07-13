import { FC, ReactNode } from "react";

import { useFetchCharacters } from "./hook";
import { DataSection } from "./ui";

import { ErrorSection } from "§/entities/ErrorSection";
import { LoadingSpinner } from "§/entities/LoadingSpinner";

interface MainSectionProps {
  searchString: string;
}

export const MainSection: FC<MainSectionProps> = ({ searchString }) => {
  const { data, error, loading } = useFetchCharacters(searchString);

  let content: ReactNode;
  if (error) {
    content = <ErrorSection error={error} />;
  } else if (loading) {
    content = <LoadingSpinner />;
  } else {
    content = <DataSection searchString={searchString} data={data} />;
  }

  return (
    <main className="bg-gray-200 flex-1 flex flex-col items-center justify-center">
      <div className="max-w-screen-lg mx-auto p-4">{content}</div>
    </main>
  );
};
