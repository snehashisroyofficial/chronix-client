import React, { useContext } from "react";
import { ProductContext } from "../Auth/ProductProvider/ProductProvider";

const useProduct = () => {
  const product = useContext(ProductContext);

  return product;
};

export default useProduct;
