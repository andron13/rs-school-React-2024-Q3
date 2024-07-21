import { FC, useEffect } from "react";

export const ErrorComponent: FC = () => {
  /*  useEffect(() => {
    throw new Error("This is a test error!");
  }, []);

  return <div>Something went wrong!</div>;*/
  throw new Error("This is a test error!");
};
