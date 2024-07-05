import { FC } from "react";

import imgSrc from "§/assets/images/spinner.png";

export const LoadingSection: FC = () => (
  <img src={imgSrc} alt="spinner" className="w-32 h-32 animate-spin" />
);
