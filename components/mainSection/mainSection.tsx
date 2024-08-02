import { FC, ReactNode } from "react";

import { ErrorSection } from "@/components/error/errorSection.tsx";
import { LoadingSpinner } from "@/components/loadingSpinner.tsx";
import { DataSection } from "@/components/mainSection/dataSection.tsx";
import { useFetchCharacters } from "@/components/shared/hooks/useFetchCharacters.ts";

interface MainSectionProps {
  searchString: string;
}

export const MainSection: FC<MainSectionProps> = ({ searchString }) => {
  const { data, error, loading } = useFetchCharacters(searchString);
  // const { theme } = useTheme();
  const theme = "light";

  let content: ReactNode;
  if (error) {
    content = <ErrorSection error={error} />;
  } else if (loading) {
    content = <LoadingSpinner />;
  } else {
    content = <DataSection searchString={searchString} data={data} />;
  }
  //TODO: remove
  console.log("data", data);
  return (
    <main
      className={`${theme === "light" ? "bg-white text-gray-900" : "bg-gray-800 text-white"}`}
    >
      <div className="max-w-screen-lg mx-auto p-4">{content}</div>
    </main>
  );
};
