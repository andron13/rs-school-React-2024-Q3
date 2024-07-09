import { ErrorButton } from "§entities/ErrorButton";
import { Footer } from "§entities/Footer";
import { Logo } from "§entities/Logo";

export const About = () => (
  <div className="flex flex-col min-h-screen">
    <header className="bg-blue-500 h-56 flex items-center justify-evenly text-center text-white">
      <Logo />
      <ErrorButton />
    </header>
    <main className="flex justify-evenly ">about</main>
    <Footer />
  </div>
);
