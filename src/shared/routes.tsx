import MainLayout from "@/features/main-layout";
import { About, Frontpage, NotFound404 } from "@/pages";

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
