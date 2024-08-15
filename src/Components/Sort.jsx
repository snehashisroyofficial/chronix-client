import React from "react";

const Sort = () => {
  return (
    <div className="px-4 py-2 border-2 flex items-center gap-">
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
  );
};

export default Sort;
