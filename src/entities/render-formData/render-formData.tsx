import { FC, useEffect, useState } from "react";

import { FormDataInRedux } from "@/shared/types";

const STALE_TIME_MS = 10000;
const FRESH_BORDER_DURATION_MS = 2500;

interface RenderFormDataProps {
  data: FormDataInRedux;
}

export const RenderFormData: FC<RenderFormDataProps> = ({ data }) => {
  const [isFresh, setIsFresh] = useState(false);

  useEffect(() => {
    if (data.timestamp) {
      const timestamp = new Date(data.timestamp).getTime();
      const now = Date.now();
      const diff = now - timestamp;

      if (diff <= STALE_TIME_MS) {
        setIsFresh(true);
        const timer = setTimeout(() => {
          setIsFresh(false);
        }, FRESH_BORDER_DURATION_MS);

        return () => clearTimeout(timer);
      }
    }
  }, [data.timestamp]);

  return (
    <article
      className={`m-2 border-2 p-4 ${isFresh ? "border-green-500" : "border-gray-300"} rounded-lg shadow-md`}
    >
      {data.name && (
        <p>
          <strong>Name:</strong> {data.name}
        </p>
      )}
      {data.age !== undefined && (
        <p>
          <strong>Age:</strong> {data.age}
        </p>
      )}
      {data.email && (
        <p>
          <strong>Email:</strong> {data.email}
        </p>
      )}
      {data.gender && (
        <p>
          <strong>Gender:</strong> {data.gender}
        </p>
      )}
      {data.terms !== undefined && (
        <p>
          <strong>Terms Accepted:</strong> {data.terms ? "Yes" : "No"}
        </p>
      )}
      {data.password !== undefined && (
        <p>
          <strong>Password:</strong> {data.password}
        </p>
      )}
      {data.country && (
        <p>
          <strong>Country:</strong> {data.country.name} ({data.country.code})
        </p>
      )}
      {data.image && (
        <div className="mt-4">
          <strong>Image:</strong>
          <div className="mt-2">
            <img
              src={data.image}
              alt="Form Data"
              className="max-h-48 max-w-xs object-contain"
            />
          </div>
        </div>
      )}
    </article>
  );
};
