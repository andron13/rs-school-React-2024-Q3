import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "§shared/routes";

export const App: FC = () => {
  const render = routes.map((e) => {
    return <Route path={e.path} element={e.element} />;
  });

  return <Routes>{render}</Routes>;
};
