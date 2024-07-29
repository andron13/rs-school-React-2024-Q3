import { Outlet } from "react-router-dom";

import { Frontpage } from "@/src/pages/frontpage";

function DetailsLayout() {
  return (
    <>
      <Frontpage />
      <Outlet />
    </>
  );
}

export default DetailsLayout;
