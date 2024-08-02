import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { logoImg } from "@/components/assets/imgExport.ts";

export const Logo: FC = () => {
  return (
    <figure className="w-1/3">
      <Link href="/">
        <Image src={logoImg} alt="logo" className="h-32 border-0" />
      </Link>
    </figure>
  );
};
