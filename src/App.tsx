import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CharacterInfoPopup } from "§/features/CharacterInfoPopup";
import { ThemeProvider } from "§/shared/context/ThemeContext.tsx";
import { routes } from "§/shared/routes";

const router = createBrowserRouter(routes);

export const App: FC = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <CharacterInfoPopup />
    </ThemeProvider>
  );
};
