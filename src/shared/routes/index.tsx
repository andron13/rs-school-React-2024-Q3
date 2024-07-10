import MainLayout from "§/features/MainLayout";
import { About } from "§/pages/about";
import { Frontpage } from "§/pages/frontpage";
import { NotFound404 } from "§/pages/notFound404";

export const routes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Frontpage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound404 />,
      },
    ],
  },
];
