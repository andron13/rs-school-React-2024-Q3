import { Logo } from "@/entities/logo";

export const About = () => (
  <div className="flex min-h-screen flex-col">
    <header className="flex h-56 items-center justify-evenly bg-blue-500 text-center text-white">
      <Logo />
    </header>
    <main className="flex h-32 items-center justify-evenly text-7xl">
      It is a test with about
    </main>
  </div>
);
