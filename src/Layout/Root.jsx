import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Root = () => {
  return (
    <div className="font-Lato">
      <Navbar />

      <div className="h-[calc(100vh-112px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
