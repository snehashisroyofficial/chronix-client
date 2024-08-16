import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Outlet } from "react-router-dom";
import Sort from "../../Components/Sort";

const Categories = () => {
  return (
    <div className="h-screen ">
      <div className="flex items-center">
        <div>
          <Sort />
        </div>

        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Categories;
