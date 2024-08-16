import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Shared/ErrorPage";
import AddProducts from "../Pages/AllProducts/AddProducts";
import AllProducts from "../Pages/AllProducts/AllProducts";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: "true",
        element: <Home />,
      },
      {
        path: "/all-products",
        element: <AllProducts />,
      },
      {
        path: "/add-products",
        element: <AddProducts />,
      },
    ],
  },
]);

export default route;
