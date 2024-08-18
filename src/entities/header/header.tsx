import { FaCode } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="flex h-20 items-center space-x-3 bg-blue-500 pl-2 text-white">
      <a href="/" className="flex text-4xl font-bold uppercase tracking-wide">
        Forms React <FaCode className="text-4xl" />
      </a>
    </header>
  );
};
