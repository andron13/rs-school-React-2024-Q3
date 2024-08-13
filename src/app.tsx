import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "@/shared/routes.tsx";

const router = createBrowserRouter(routes);

export const App = () => {
  return <RouterProvider router={router} />;
};
