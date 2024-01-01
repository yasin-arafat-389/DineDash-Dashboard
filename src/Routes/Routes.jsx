import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import DashboardLayout from "../Layouts/DashboardLayout";

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
        path: "/login",
        element: <div>Login</div>,
      },
    ],
  },

  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/overview",
        element: <div>Hi, overview</div>,
      },
    ],
  },
]);

export default router;
