import React, { createContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Axios/useAxiosSecure";

export const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [sort, setSort] = useState("asc");
  const [price, setPrice] = useState(0);

  // here we store paginate main data
  const [productMainData, setProductMainData] = useState([]);

  const [searchValue, setSearchValue] = useState("");
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

  const authInfo = {
    setSort,
    sort,
    products,
    refetch,
    loading,
    searchValue,
    setSearchValue,
    productMainData,
    setProductMainData,
    price,
    setPrice,
  };

  return (
    <ProductContext.Provider value={authInfo}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
