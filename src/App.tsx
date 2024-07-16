import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from "§/shared/routes";

const router = createBrowserRouter(routes);

export const App: FC = () => {
  return <RouterProvider router={router} />;
};
