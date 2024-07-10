import { FC, ReactNode, useMemo, useState } from "react";

import { useFetchCharacters } from "./hook";
import { DataSection } from "./ui";

import { ErrorSection } from "§/entities/ErrorSection";
import { LoadingSpinner } from "§/entities/LoadingSpinner";
import { Pagination } from "§/widgets/Pagination";

interface MainSectionProps {
  searchString: string;
}

export const MainSection: FC<MainSectionProps> = ({ searchString }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const { data, error, loading } = useFetchCharacters(searchString);

  const totalPages = useMemo(() => {
    return data ? Math.ceil(data.length / itemsPerPage) : 1;
  }, [data]);

  const currentData = useMemo(() => {
    if (!data) return [];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }, [data, currentPage, itemsPerPage]);

  let content: ReactNode;
  if (error) {
    content = <ErrorSection error={error} />;
  } else if (loading) {
    content = <LoadingSpinner />;
  } else {
    content = <DataSection searchString={searchString} data={currentData} />;
  }

  return (
    <main className="bg-gray-200 flex-1 flex flex-col items-center justify-center">
      <div className="max-w-screen-lg mx-auto p-4">{content}</div>
      {!error && data && data.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </main>
  );
};
