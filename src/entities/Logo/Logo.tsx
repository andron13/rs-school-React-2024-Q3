import { FC } from "react";

import imgSrc from "../../assets/images/logo.png";

export const Logo: FC = () => {
  return (
    <figure className="w-1/3">
      <a href="/" className="">
        <img src={imgSrc} alt="logo" />
      </a>
    </figure>
  );
};
