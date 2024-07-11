import { FC } from "react";

import { NotFoundSection } from "§/pages/notFoundSearchPage";

export const ErrorSection: FC<{ error: string | null }> = ({ error }) => {
  if (!error) return null;
  return <NotFoundSection />;
};
