import { Details } from "§/entities/Details";
import DetailsLayout from "§/features/DetailsLayout";
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
        element: <DetailsLayout />,
        children: [
          {
            path: "/details/:itemId",
            element: <Details />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound404 />,
      },
    ],
  },
];
