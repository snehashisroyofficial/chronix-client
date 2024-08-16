import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import route from "./Routes/route";
import ProductProvider from "./Auth/ProductProvider/ProductProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ProductProvider>
        <RouterProvider router={route}></RouterProvider>
      </ProductProvider>
    </QueryClientProvider>
  </StrictMode>
);
