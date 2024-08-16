import React from "react";
import useProduct from "../Hooks/useProduct";

const Sort = () => {
  const { product } = useProduct();

  const handleSort = (e) => {
    const data = e.target.value;
    product(data);
  };

  return (
    <div className="px-4 py-2 border-2 flex items-center gap-2">
      <h1>Sort By: </h1>
      <select
        onChange={handleSort}
        defaultValue="popularity"
        name="sort"
        id=""
        className="outline-none"
      >
        <option defaultChecked value="popularity">
          Popularity
        </option>
        <option value="lowtohigh">Low to high</option>
        <option value="hightolow">High to low</option>
        <option value="newarrivals">New Arrivals</option>
      </select>
    </div>
  );
};

export default Sort;
