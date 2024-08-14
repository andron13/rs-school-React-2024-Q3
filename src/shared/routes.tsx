import MainLayout from "@/features/main-layout";
import {
  About,
  Frontpage,
  NotFound404,
  ReactHookForm,
  UncontrolledForm,
} from "@/pages";

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
