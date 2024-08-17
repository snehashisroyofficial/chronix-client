import React from "react";
import useProduct from "../Hooks/useProduct";

const BrandName = () => {
  const { products } = useProduct();

  return (
    <div className=" px-3">
      <p className="px-4 py-2 bg-gray-200 font-bold mb-3">Brand Name</p>
      {products.map((item, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <input type="checkbox" />

          <p className="text-nowrap">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default BrandName;
