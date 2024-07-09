import { ReactNode } from "react";

import { About } from "§pages/about";
import { Frontpage } from "§pages/frontpage";
import { NotFound404 } from "§pages/notFound404";

export interface Route {
  path: string;
  element: ReactNode;
  title: string;
}

export const routes: Route[] = [
  { path: "/", element: <Frontpage />, title: "Frontpage" },
  { path: "about", element: <About />, title: "About" },
  { path: "*", element: <NotFound404 />, title: "404" },
];
