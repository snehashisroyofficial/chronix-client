import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const SearchBar = () => {
  return (
    <div>
      <div className=" flex items-center w-full border-2 border-green-600">
        <input
          type="text"
          placeholder="Search Here"
          className="px-4 py-2 outline-none"
        />
        <button className="px-4 py-2 bg-green-600 text-white font-semibold ">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
