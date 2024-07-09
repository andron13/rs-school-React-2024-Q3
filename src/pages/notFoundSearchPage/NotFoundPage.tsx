import { FC } from "react";

import imgSrc from "../../assets/images/notfound.png";

export const NotFoundSection: FC = () => {
  // noinspection TypeScriptValidateTypes
  return (
    <section className="flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-4">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <img
        src={imgSrc}
        alt="not-found"
        className="w-1/2 max-w-md rounded shadow-lg"
      />
    </section>
  );
};
