import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import route from "./Routes/route";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FirebaseProvider from "./Auth/FirebaseProvider";
import ProductProvider from "./Auth/ProductProvider";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <FirebaseProvider>
        <ProductProvider>
          <RouterProvider router={route}></RouterProvider>
        </ProductProvider>
      </FirebaseProvider>
    </QueryClientProvider>
  </StrictMode>
);
