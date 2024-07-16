import { FC } from "react";

import { Character } from "§/shared/types";

export const DataDetailsUi: FC<{ data: Character }> = ({ data }) => {
  const classes = {
    container: "mt-1 border rounded-lg p-1 text-gray-800 text-xl",
    title: "text-xl font-bold mb-1",
    h2: "text-xl font-bold mb-1",
    image: "mt-1 rounded-lg shadow-lg",
    keyword: "font-bold",
  };

  return (
    <article className="mb-4">
      {data && (
        <div className={classes.container}>
          <h2 className={classes.h2}>Character ID: {data.id}</h2>

          <h3 className={classes.title}>Name: {data.name}</h3>
          <p>
            <span className={classes.keyword}>Status:</span> {data.status}
          </p>
          <p>
            <span className={classes.keyword}>Species:</span> {data.species}
          </p>
          <p>
            <span className={classes.keyword}>Gender:</span> {data.gender}
          </p>
          <p>
            <span className={classes.keyword}>Origin:</span> {data.origin.name}
          </p>
          {/*<p>*/}
          {/*  <span className={classes.keyword}>Location:</span>{" "}*/}
          {/*  {data.location.name}*/}
          {/*</p>*/}
          <p>
            <span className={classes.keyword}>Episode:</span>{" "}
            {data.episode.length}
          </p>
          <img src={data.image} alt={data.name} className={classes.image} />
        </div>
      )}
    </article>
  );
};
