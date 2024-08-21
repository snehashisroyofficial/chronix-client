import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Root = () => {
  return (
    <div className="font-Lato">
      <div className="sticky z-20 top-0">
        <Navbar />
      </div>

      <div className="min-h-[calc(100vh-500px)] px-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
