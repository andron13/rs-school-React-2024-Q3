import { FC } from "react";

import { NotFoundSection } from "§/pages/notFoundSearchPage";

interface ErrorSectionProps {
  error: string | null;
}

export const ErrorSection: FC<ErrorSectionProps> = ({ error }) => {
  if (!error) return null;
  return <NotFoundSection />;
};
