import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RenderFormData } from "@/entities";
import {
  selectLastControlledFormData,
  selectLastUncontrolledFormData,
} from "@/shared/store/selectors.ts";

const links = [
  { to: "/uncontrolled-form", label: "Uncontrolled Form" },
  { to: "/react-hook-form", label: "React Hook Form" },
];

export const Frontpage = () => {
  const lastUncontrolledFormData = useSelector(selectLastUncontrolledFormData);
  const lastControlledFormData = useSelector(selectLastControlledFormData);

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-gray-100 p-4">
      <h2 className="mb-8 text-3xl font-bold text-gray-800">
        Welcome to the Frontpage
      </h2>
      <div className="mb-8 flex flex-col space-y-4">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="text-lg text-blue-600 underline transition-colors duration-300 hover:text-blue-800"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex w-full max-w-4xl gap-4">
        <div className="flex-1 rounded-lg border-2 border-yellow-500 bg-yellow-50 p-4 shadow-md">
          <h3 className="mb-4 border-b-2 border-gray-300 pb-2 text-xl font-semibold">
            Uncontrolled Form Data
          </h3>
          {lastUncontrolledFormData ? (
            <RenderFormData data={lastUncontrolledFormData} />
          ) : (
            <p>No uncontrolled form data available</p>
          )}
        </div>
        <div className="flex-1 rounded-lg border-2 border-yellow-500 bg-yellow-50 p-4 shadow-md">
          <h3 className="mb-4 border-b-2 border-gray-300 pb-2 text-xl font-semibold">
            Controlled Form Data
          </h3>
          {lastControlledFormData ? (
            <RenderFormData data={lastControlledFormData} />
          ) : (
            <p>No controlled form data available</p>
          )}
        </div>
      </div>
    </div>
  );
};
