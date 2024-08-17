import React, { createContext, useState } from "react";
import useAxiosSecure from "../../Axios/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [sort, setSort] = useState(null);
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
    sort,
    products,
    refetch,
    loading,
    searchValue,
    setSearchValue,
  };

  return (
    <ProductContext.Provider value={authInfo}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
