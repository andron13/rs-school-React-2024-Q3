import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { About } from "§pages/about";
import { Frontpage } from "§pages/frontpage";
import { NotFound404 } from "§pages/notFound404";

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Frontpage />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
};
