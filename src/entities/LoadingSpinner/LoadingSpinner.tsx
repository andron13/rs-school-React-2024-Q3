import { FC } from "react";

import { spinnerImg } from "§/assets/imgExport.ts";

export const LoadingSpinner: FC = () => (
  <img src={spinnerImg} alt="spinner" className="w-32 h-32 animate-spin" />
);
