import { useContext } from "react";
import { authContext } from "../Contexts/AuthContext";
import SideDrawer from "../Components/DashboardNav/SideDrawer";
import SideBar from "../Components/DashboardNav/SideBar";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  let { user } = useContext(authContext);

  return (
    <div className="">
      <div className=" w-[90%] mx-auto  ">
        {/* Top Banner */}
        <div
          className="flex items-center justify-center bg-blue-500 text-white px-6 py-3.5 rounded 
          font-[sans-serif] my-4 gap-5"
        >
          <p className="text-base">
            Welcome to your Dashboard{" "}
            <span className="font-bold ml-1">{user?.displayName}</span>
          </p>

          <div className="block md:block lg:hidden cursor-pointer">
            <SideDrawer />
          </div>
        </div>

        <div className="flex gap-5 ">
          <SideBar />
          <div className="w-full">
            <Toaster position="top-center" reverseOrder={false} />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
