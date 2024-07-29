import DetailsLayout from "@/src/features/DetailsLayout";
import MainLayout from "@/src/features/MainLayout";
import { About } from "@/src/pages/about";
import { Frontpage } from "@/src/pages/frontpage";
import { NotFound404 } from "@/src/pages/notFound404";
import { Details } from "@/src/widgets/Details";

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
