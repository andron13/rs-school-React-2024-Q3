import { Outlet } from "react-router-dom";

import { Frontpage } from "§/pages/frontpage";

function DetailsLayout() {
  return (
    <>
      <Frontpage />
      <Outlet />
    </>
  );
}

export default DetailsLayout;
