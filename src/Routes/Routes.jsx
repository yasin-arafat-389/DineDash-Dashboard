import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import DashboardLayout from "../Layouts/DashboardLayout";
import PartnerRequests from "../Pages/AdminPages/PartnerRequests/PartnerRequests";
import AdminRoute from "./AdminRoute";
import RestaurantHandlersRoute from "./RestaurantHandlersRoute";
import RiderRequests from "../Pages/AdminPages/RiderRequests/RiderRequests";
import Orders from "../Pages/PartnerPages/Orders/Orders";
import CustomBurger from "../Pages/PartnerPages/CustomBurger/CustomBurger";
import AddNewFood from "../Pages/PartnerPages/AddNewFood/AddNewFood";
import MyFoods from "../Pages/PartnerPages/MyFoods/MyFoods";
import PrivateRoute from "./PrivateRoute";
import Overview from "../Components/Overview/Overview";
import RiderRoute from "./RiderRoute";
import IncomingDeliveries from "../Pages/RiderPages/IncomingDeliveries/IncomingDeliveries";
import AcceptedDeliveries from "../Pages/RiderPages/AcceptedDeliveries/AcceptedDeliveries";
import RiderRegisteration from "../Pages/RiderRegister/RiderRegisteration";
import Login from "../Pages/Login/Login";
import CreateOffer from "../Pages/PartnerPages/CreateOffer/CreateOffer";

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
        element: <RiderRegisteration />,
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
      // Admin routes
      {
        path: "/dashboard/overview",
        element: (
          <PrivateRoute>
            <Overview />
          </PrivateRoute>
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
        path: "/dashboard/overview",
        element: (
          <PrivateRoute>
            <Overview />
          </PrivateRoute>
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
      {
        path: "/restaurant/dashboard/create-offer",
        element: (
          <RestaurantHandlersRoute>
            <CreateOffer />
          </RestaurantHandlersRoute>
        ),
      },

      // Rider routes
      {
        path: "/dashboard/overview",
        element: (
          <PrivateRoute>
            <Overview />
          </PrivateRoute>
        ),
      },
      {
        path: "/rider/dashboard/incoming-deliveries",
        element: (
          <RiderRoute>
            <IncomingDeliveries />
          </RiderRoute>
        ),
      },
      {
        path: "/rider/dashboard/accepted-deliveries",
        element: (
          <RiderRoute>
            <AcceptedDeliveries />
          </RiderRoute>
        ),
      },
    ],
  },
]);

export default router;
