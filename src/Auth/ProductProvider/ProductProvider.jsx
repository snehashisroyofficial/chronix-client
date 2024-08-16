import React, { createContext, useState } from "react";

export const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [sort, setSort] = useState(null);

  const authInfo = { sort };

  return (
    <ProductContext.Provider value={authInfo}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
