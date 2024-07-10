import React from "react";
import { Outlet } from "react-router-dom";

import { Details } from "§/entities/Details";

function DetailsLayout() {
  return (
    <div className="flex">
      <Outlet />
      <Details />
    </div>
  );
}

export default DetailsLayout;
