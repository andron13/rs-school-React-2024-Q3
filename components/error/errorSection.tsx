import { FC } from "react";

import { NotFoundSection } from "./notFoundPage";

export const ErrorSection: FC<{ error: string | null }> = ({ error }) => {
  if (!error) return null;
  return <NotFoundSection />;
};
