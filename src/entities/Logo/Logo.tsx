import { FC } from "react";

import { logoImg } from "@/src/assets/imgExport.ts";

export const Logo: FC = () => {
  return (
    <figure className="w-1/3">
      <a href="/" className="">
        <img src={logoImg} alt="logo" className="h-40 border-0" />
      </a>
    </figure>
  );
};
