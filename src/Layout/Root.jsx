import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Root = () => {
  return (
    <div className="font-Lato">
      <div className="sticky z-10 top-0">
        <Navbar />
      </div>

      <div className="h-[calc(100vh-112px)] px-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
