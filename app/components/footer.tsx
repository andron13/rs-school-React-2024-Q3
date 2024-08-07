import { Link } from "@remix-run/react";
import { FC, ReactNode } from "react";

export const Footer: FC = (): ReactNode => {
  return (
    <footer className="h-16 bg-gray-800 text-white flex items-center justify-center">
      <p className="flex justify-around w-full">
        <span>React Course 2024</span>
        <span>©andron13</span>
        <span>
          <Link to="/about">About</Link>
        </span>
      </p>
    </footer>
  );
};
