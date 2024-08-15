import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Outlet } from "react-router-dom";

const Categories = () => {
  return (
    <div className="h-screen ">
      {/* sort buttons  */}
      <div className="px-4 py-2 border-2 flex items-center gap-2 w-fit">
        <h1>Sort By: </h1>
        <select defaultValue="" name="sort" id="" className="outline-none">
          <option defaultChecked value="popularity">
            Popularity
          </option>
          <option value="lowtohigh">Low to high</option>
          <option value="hightolow">High to low</option>
          <option value="newarrivals">New Arrivals</option>
        </select>
      </div>

      <div className="flex items-center">
        <div></div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Categories;
