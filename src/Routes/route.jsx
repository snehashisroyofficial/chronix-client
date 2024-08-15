import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Shared/ErrorPage";
import Categories from "../Pages/Categories/Categories";

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
        path: "/categories",
        element: <Categories />,
      },
    ],
  },
]);

export default route;
