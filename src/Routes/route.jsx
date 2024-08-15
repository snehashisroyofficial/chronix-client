import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Shared/ErrorPage";

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
    ],
  },
]);

export default route;
