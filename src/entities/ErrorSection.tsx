import { FC } from "react";

import { NotFoundSection } from "§features/NotFoundPage";

interface ErrorSectionProps {
  error: string | null;
}

export const ErrorSection: FC<ErrorSectionProps> = ({ error }) => {
  if (!error) return null;
  return <NotFoundSection />;
};
