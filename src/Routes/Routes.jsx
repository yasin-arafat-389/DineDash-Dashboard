import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import DashboardLayout from "../Layouts/DashboardLayout";
import Login from "../Pages/Login/Login";
import AdminOverview from "../Pages/AdminPages/AdminOverview/AdminOverview";
import PartnerRequests from "../Pages/AdminPages/PartnerRequests/PartnerRequests";
import AdminRoute from "./AdminRoute";
import RestaurantHandlersRoute from "./RestaurantHandlersRoute";
import RiderRegister from "../Pages/RiderRegister/RiderRegister";
import RiderRequests from "../Pages/AdminPages/RiderRequests/RiderRequests";
import PartnerOverview from "../Pages/PartnerPages/PartnerOverview/PartnerOverview";
import Orders from "../Pages/PartnerPages/Orders/Orders";
import CustomBurger from "../Pages/PartnerPages/CustomBurger/CustomBurger";
import AddNewFood from "../Pages/PartnerPages/AddNewFood/AddNewFood";
import MyFoods from "../Pages/PartnerPages/MyFoods/MyFoods";

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
        path: "/rider-register",
        element: <RiderRegister />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/unauthorized-route",
        element: <div>This is un</div>,
      },
    ],
  },

  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      // Admin routes
      {
        path: "/admin/dashboard/overview",
        element: (
          <AdminRoute>
            <AdminOverview />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/dashboard/partner-requests",
        element: (
          <AdminRoute>
            <PartnerRequests />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/dashboard/rider-requests",
        element: (
          <AdminRoute>
            <RiderRequests />
          </AdminRoute>
        ),
      },

      // Restaurant handlers routes
      {
        path: "/restaurant/dashboard/overview",
        element: (
          <RestaurantHandlersRoute>
            <PartnerOverview />
          </RestaurantHandlersRoute>
        ),
      },
      {
        path: "/restaurant/dashboard/orders",
        element: (
          <RestaurantHandlersRoute>
            <Orders />
          </RestaurantHandlersRoute>
        ),
      },
      {
        path: "/restaurant/dashboard/custom-burger",
        element: (
          <RestaurantHandlersRoute>
            <CustomBurger />
          </RestaurantHandlersRoute>
        ),
      },
      {
        path: "/restaurant/dashboard/add-new-food",
        element: (
          <RestaurantHandlersRoute>
            <AddNewFood />
          </RestaurantHandlersRoute>
        ),
      },
      {
        path: "/restaurant/dashboard/my-foods",
        element: (
          <RestaurantHandlersRoute>
            <MyFoods />
          </RestaurantHandlersRoute>
        ),
      },
    ],
  },
]);

export default router;
