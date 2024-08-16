import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Outlet } from "react-router-dom";
import Sort from "../../Components/Sort";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Axios/useAxiosSecure";
import { PacmanLoader } from "react-spinners";
import SearchBar from "../../Components/SearchBar";

const AllProducts = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: products = [],
    refetch,
    isLoading: loading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosSecure.get("/get-products");
      return res.data;
    },
  });

  if (loading) {
    return (
      <div className="h-full flex justify-center items-center">
        <PacmanLoader color="#0019ff" />
      </div>
    );
  }

  return (
    <div className="h-screen max-w-7xl mx-auto ">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4 py-16">
          <Sort />
          <SearchBar />
        </div>
        <div className="grid grid-cols-5 gap-10">
          {products.map((item, idx) => (
            <div
              key={idx}
              className=" p-4 border-2 rounded-2xl flex flex-col justify-around"
            >
              <div className="max-h-60  overflow-hidden">
                <img
                  className="w-full h-full object-contain"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className=" flex  flex-col justify-between">
                <p className="text-2xl font-bold">{item.title}</p>
                <p>
                  {" "}
                  {item.description.length > 50
                    ? item.description.substring(0, 50) + "..."
                    : item.description}
                </p>
                <p className="flex items-center gap-2">
                  {" "}
                  <Icon
                    className="text-amber-600"
                    icon="ic:outline-star-half"
                  />{" "}
                  {item.reviews}
                </p>
                <span className="flex items-center gap-2 font-semibold ">
                  <p className="text-2xl">₹ {item.discounted_price}</p>
                  <p className="line-through text-red-500">₹ {item.price} </p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
