import { FC } from "react";

import { logoImg } from "§/assets";

export const Logo: FC = () => {
  return (
    <figure className="w-1/3">
      <a href="/" className="">
        <img src={logoImg} alt="logo" className="h-40" />
      </a>
    </figure>
  );
};
