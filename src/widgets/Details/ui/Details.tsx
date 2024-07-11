export const DataDetailsUi = ({ data }) => {
  const classes = {
    container: "mt-2 border rounded-lg p-4 text-gray-800 text-xl",
    title: "text-2xl font-bold mb-2",
    h2: "text-2xl font-bold mb-4",
    image: "mt-4 rounded-lg shadow-lg",
    field: "mb-2",
    keyword: "font-bold",
  };

  return (
    <article className="mb-4">
      {data && (
        <div className={classes.container}>
          <h2 className={classes.h2}>Character ID: {data.id}</h2>

          <h3 className={classes.title}>Name: {data.name}</h3>
          <p className={classes.field}>
            <span className={classes.keyword}>Status:</span> {data.status}
          </p>
          <p className={classes.field}>
            <span className={classes.keyword}>Species:</span> {data.species}
          </p>
          <p className={classes.field}>
            <span className={classes.keyword}>Gender:</span> {data.gender}
          </p>
          <p className={classes.field}>
            <span className={classes.keyword}>Origin:</span> {data.origin.name}
          </p>
          <p className={classes.field}>
            <span className={classes.keyword}>Location:</span>{" "}
            {data.location.name}
          </p>
          <p className={classes.field}>
            <span className={classes.keyword}>Episode:</span>{" "}
            {data.episode.length}
          </p>
          <img src={data.image} alt={data.name} className={classes.image} />
        </div>
      )}
    </article>
  );
};
