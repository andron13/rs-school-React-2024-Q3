import { Link } from "react-router-dom";

const links = [
  { to: "/uncontrolled-form", label: "Uncontrolled Form" },
  { to: "/react-hook-form", label: "React Hook Form" },
  { to: "/about", label: "About" },
  { to: "/404", label: "Not Found" },
];

export const Frontpage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
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
    </div>
  );
};
