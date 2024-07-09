import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

export const Footer: FC = (): ReactNode => {
  return (
    <footer className="h-16 bg-gray-800 text-white flex items-center justify-center">
      <p className="flex justify-around w-full">
        <span>React Course 2024</span>
        <span>© andron13</span>
        <span>
          <Link to="about" title="test">
            About
          </Link>
        </span>
      </p>
    </footer>
  );
};
