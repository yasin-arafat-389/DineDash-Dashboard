import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import DashboardLayout from "../Layouts/DashboardLayout";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";

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
        element: <Login />,
      },
    ],
  },

  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/overview",
        element: (
          <PrivateRoute>
            <div>Hi, overview</div>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
