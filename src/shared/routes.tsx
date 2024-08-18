import MainLayout from "@/features/main-layout";
import {
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
