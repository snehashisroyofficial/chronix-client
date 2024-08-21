import React from "react";
import useProduct from "../Hooks/useProduct";

const PriceRange = () => {
  const { setPrice } = useProduct();

  const handlePrice = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = { min: form.min.value, max: form.max.value };
    console.log(data);
    setPrice(data);
    form.reset();
  };

  return (
    <div className=" border-2 border-green-600 flex items-center gap-2  ">
      <div className="">
        <form onSubmit={handlePrice} className="flex flex-col md:flex-row ">
          <input
            type="number"
            name="min"
            className="px-4 py-2 w-full outline-none  border border-green-600 "
            placeholder="min: ₹0"
          />
          <input
            type="number"
            name="max"
            className="px-4 py-2 w-full outline-none  border border-green-600"
            placeholder="max: ₹25000"
          />
          <button
            className="py-2 px-4 w-full bg-green-600 font-semibold text-white"
            type="submit"
          >
            Filter
          </button>
        </form>
      </div>
    </div>
  );
};

export default PriceRange;
