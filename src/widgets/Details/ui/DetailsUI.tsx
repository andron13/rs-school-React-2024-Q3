import { FC } from "react";

import { Character } from "@/src/shared/types";

export const DataDetailsUi: FC<{ data: Character }> = ({ data }) => {
  return (
    <article>
      {data && (
        <div>
          <h4>Character ID: {data.id}</h4>

          <p className="font-bold">Name: {data.name}</p>
          <p>
            <b>Status:</b> {data.status}
          </p>
          <p>
            <b>Species:</b> {data.species}
          </p>
          <p>
            <b>Gender:</b> {data.gender}
          </p>
          <p>
            <b>Origin:</b> {data.origin.name}
          </p>
          <p>
            <b>Location:</b> {data.location.name}
          </p>
          <p>
            <b>Episode:</b> {data.episode.length}
          </p>
          <img src={data.image} alt={data.name} />
        </div>
      )}
    </article>
  );
};
