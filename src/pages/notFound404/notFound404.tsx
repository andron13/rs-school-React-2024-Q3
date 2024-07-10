import { ErrorButton } from "§/entities/ErrorButton";
import { Logo } from "§/entities/Logo";

export const NotFound404 = () => (
  <>
    <header className="bg-blue-500 h-56 flex items-center justify-evenly text-center text-white">
      <Logo />
      <ErrorButton />
    </header>
    <main className="flex justify-evenly text-7xl ">404</main>
  </>
);
