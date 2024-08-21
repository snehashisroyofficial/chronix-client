import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import useProduct from "../Hooks/useProduct";

const SearchBar = () => {
  const { setSearchValue } = useProduct();

  const handleSearch = (e) => {
    e.preventDefault();
    const data = e.target.search.value;
    console.log(data);
    setSearchValue(data);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className=" flex items-center w-full border-2 border-green-600">
          <input
            type="text"
            name="search"
            placeholder="Search Here"
            className="px-4 py-2 outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white font-semibold "
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
