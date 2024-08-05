import Image from "next/image";

import { errorImg } from "@/components/assets/imgExport.ts";

export const ErrorBoundaryHandlerUI = () => (
  <section className="h-screen flex flex-col items-center justify-center bg-red-100">
    <h2 className="text-2xl font-bold text-red-600 mb-4">
      Oops! Something went wrong.
    </h2>
    <p className="text-lg text-red-600 mb-4">
      Please try refreshing the page or come back later.
    </p>
    <figure className="w-1/2 max-w-md">
      <Image
        src={errorImg}
        alt="Error illustration"
        className="rounded shadow-lg"
      />
    </figure>
  </section>
);