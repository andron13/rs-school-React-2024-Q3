import { Logo } from "§/entities/Logo";

export const NotFound404 = () => (
  <>
    <header className="bg-blue-500 h-56 flex items-center justify-items-start pl-20 text-center text-white">
      <Logo />
    </header>
    <main className="flex flex-col justify-evenly items-center">
      <div className="text-7xl font-bold text-gray-900 my-6">404</div>
      <div className="text-7xl font-bold text-gray-900 mb-6">
        Oops! Page not found
      </div>
      <div className="text-3xl mb-12">
        The page you are looking for might have been removed or does not exist.
      </div>
    </main>
  </>
);
