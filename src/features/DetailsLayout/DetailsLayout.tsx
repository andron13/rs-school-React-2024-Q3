import React from "react";
import { Outlet } from "react-router-dom";

import { Details } from "§/entities/Details";
import { Frontpage } from "§/pages/frontpage";

function DetailsLayout() {
  return (
    <>
      <Frontpage />
      <Outlet />
      {/*<Details />*/}
    </>
  );
}

export default DetailsLayout;
