import { FC } from "react";

import { CharacterList } from "@/src/entities/Character";
import { Character } from "@/src/shared/types";

export interface DataSectionProps {
  searchString: string;
  data: Character[] | null;
}

export const DataSection: FC<DataSectionProps> = ({ searchString, data }) => (
  <>
    <p className="mb-4">
      Search-string:{" "}
      <span className="font-bold">{searchString || "empty"}</span>
    </p>
    {data && <CharacterList characters={data} />}
  </>
);
