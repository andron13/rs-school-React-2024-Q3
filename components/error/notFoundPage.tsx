import Image from "next/image";
import { FC } from "react";

import { notfoundImg } from "@/components/assets/imgExport.ts";

export const NotFoundSection: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-4">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Image
        src={notfoundImg}
        alt="not-found"
        className="w-1/2 max-w-md rounded shadow-lg"
      />
    </section>
  );
};