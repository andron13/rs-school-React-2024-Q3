import { Link } from "@remix-run/react";
import { FC } from "react";

import { logoImg } from "~/components/assets/imgExport";

export const Logo: FC = () => {
  return (
    <figure className="w-1/3">
      <Link to="/">
        <img src={logoImg} alt="logo" className="h-32 border-0" title="" />
      </Link>
    </figure>
  );
};
