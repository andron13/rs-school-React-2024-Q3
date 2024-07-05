import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Frontpage } from "§pages/Frontpage";
import { NotFoundSection } from "§pages/NotFoundSearchPage";

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Frontpage />} />
      <Route path="*" element={<NotFoundSection />} />
    </Routes>
  );
};
