import Image from "next/image";
import { FC } from "react";

import { spinnerImg } from "@/components/assets/imgExport.ts";

export const LoadingSpinner: FC = () => (
  <Image src={spinnerImg} alt="spinner" className="w-32 h-32 animate-spin" />
);
