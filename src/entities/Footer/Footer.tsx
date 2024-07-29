import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

import { useTheme } from "@/src/shared/context/useTheme.ts";

export const Footer: FC = (): ReactNode => {
  const { theme } = useTheme();

  return (
    <footer
      className={`${theme === "light" ? "bg-gray-700 text-white" : "bg-gray-900 text-gray-500"}`}
    >
      <p className="flex justify-around w-full">
        <span>React Course 2024</span>
        <span>©andron13</span>
        <span>
          <Link to="about" title="test">
            About
          </Link>
        </span>
      </p>
    </footer>
  );
};
