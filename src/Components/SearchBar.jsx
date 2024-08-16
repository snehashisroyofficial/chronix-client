import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const SearchBar = () => {
  return (
    <div className="relative flex items-center">
      <Icon className="absolute text-3xl ml-2 " icon="eva:search-fill" />
      <input
        type="text"
        placeholder="Search Here"
        className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />
    </div>
  );
};

export default SearchBar;
