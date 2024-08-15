import MainLayout from "@/features/main-layout";
import {
  About,
  Frontpage,
  NotFound404,
  ReactHookForm,
  UncontrolledForm,
} from "@/pages";
import { Test } from "@/pages/test/test.tsx";

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
        path: "test",
        element: <Test />,
      },
      {
        path: "uncontrolled-form",
        element: <UncontrolledForm />,
      },
      {
        path: "react-hook-form",
        element: <ReactHookForm />,
      },
      {
        path: "*",
        element: <NotFound404 />,
      },
    ],
  },
];
