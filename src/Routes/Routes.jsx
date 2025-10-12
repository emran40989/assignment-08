import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

export default router;
