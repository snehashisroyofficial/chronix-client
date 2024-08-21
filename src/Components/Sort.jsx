import React from "react";
import useProduct from "../Hooks/useProduct";

const Sort = () => {
  const { setSort } = useProduct();

  const handleSort = (e) => {
    const data = e.target.value;
    console.log(data);
    setSort(data);
  };

  return (
    <div className="px-4 py-2 border-2 border-green-600 flex items-center gap-2 rounded-lg ">
      <h1 className="text-nowrap">Sort By: </h1>
      <select
        onChange={handleSort}
        defaultValue="popularity"
        name="sort"
        id=""
        className="outline-none"
      >
        <option value="asc">Low to high</option>
        <option value="dsc">High to low</option>
        <option value="date">New Arrivals</option>
      </select>
    </div>
  );
};

export default Sort;
