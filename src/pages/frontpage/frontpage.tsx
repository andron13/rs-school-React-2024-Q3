import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RenderFormData } from "@/entities";
import { RootState } from "@/shared/store/store";

const links = [
  { to: "/uncontrolled-form", label: "Uncontrolled Form" },
  { to: "/react-hook-form", label: "React Hook Form" },
];

export const Frontpage = () => {
  const uncontrolledFormData = useSelector(
    (state: RootState) => state.form.uncontrolledFormData,
  );
  const controlledFormData = useSelector(
    (state: RootState) => state.form.controlledFormData,
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-gray-100 p-4">
      <h2 className="mb-8 text-3xl font-bold text-gray-800">
        Welcome to the Frontpage
      </h2>
      <div className="flex flex-col space-y-4">
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
      <div className="m-2 flex w-full max-w-4xl flex-row justify-between gap-4 rounded-lg border-2 bg-white p-4 shadow-md">
        <div className="w-full flex-1 border-2 border-yellow-500 bg-yellow-50 p-4">
          <h3 className="mb-4 border-b-2 border-gray-300 pb-2 text-xl font-semibold">
            Uncontrolled Form Data
          </h3>
          {uncontrolledFormData ? (
            <RenderFormData data={uncontrolledFormData} />
          ) : (
            <p>No uncontrolled form data available</p>
          )}
        </div>
        <div className="w-full flex-1 border-2 border-yellow-500 bg-yellow-50 p-4">
          <h3 className="mb-4 border-b-2 border-gray-300 pb-2 text-xl font-semibold">
            Controlled Form Data
          </h3>
          {controlledFormData ? (
            <RenderFormData data={controlledFormData} />
          ) : (
            <p>No controlled form data available</p>
          )}
        </div>
      </div>
    </div>
  );
};
