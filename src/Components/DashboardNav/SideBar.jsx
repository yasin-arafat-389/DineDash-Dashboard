import { List, ListItemPrefix } from "@material-tailwind/react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoFastFood, IoPersonAdd } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";
import { useContext } from "react";
import { authContext } from "../../Contexts/AuthContext";
import { MdDashboard, MdDeliveryDining } from "react-icons/md";
import useRole from "../../Hooks/useRole";
import { IoIosNotifications, IoMdAddCircle } from "react-icons/io";
import { PiHamburgerFill } from "react-icons/pi";

const SideBar = () => {
  let { logOut, user } = useContext(authContext);
  let navigate = useNavigate();
  let [role] = useRole();

  let handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hidden md:hidden lg:block">
      <div>
        <div className="w-full max-w-[20rem] bg-[#F9FFA4] rounded-xl p-4 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 p-4 flex items-center gap-3">
            <img
              src={user?.photoURL || "https://i.ibb.co/HN9NtYY/user.png"}
              className="w-[60px] h-[60px] border-2 border-blue-500 rounded-full object-cover"
            />
            <h1 className="text-lg font-bold">{user?.displayName}</h1>
          </div>
          <List>
            {/* Admin routes */}
            {role === "admin" && (
              <NavLink to="/admin/dashboard/overview">
                <div className="flex p-3 font-bold">
                  <ListItemPrefix>
                    <MdDashboard fontSize={"20"} />
                  </ListItemPrefix>
                  Overview
                </div>
              </NavLink>
            )}

            {role === "admin" && (
              <NavLink to="/admin/dashboard/partner-requests">
                <div className="flex p-3 font-bold">
                  <ListItemPrefix>
                    <IoPersonAdd fontSize={"20"} />
                  </ListItemPrefix>
                  Partner Requests
                </div>
              </NavLink>
            )}

            {role === "admin" && (
              <NavLink to="/admin/dashboard/rider-requests">
                <div className="flex items-center p-3 font-bold">
                  <ListItemPrefix>
                    <MdDeliveryDining fontSize={"30"} />
                  </ListItemPrefix>
                  Rider Requests
                </div>
              </NavLink>
            )}

            {/* Restaurant handlers routes */}
            {role === "restaurant-handler" && (
              <NavLink to="/restaurant/dashboard/overview">
                <div className="flex p-3 font-bold">
                  <ListItemPrefix>
                    <MdDashboard fontSize={"20"} />
                  </ListItemPrefix>
                  Overview
                </div>
              </NavLink>
            )}

            {role === "restaurant-handler" && (
              <NavLink to="/restaurant/dashboard/orders">
                <div className="flex p-3 font-bold">
                  <ListItemPrefix>
                    <IoIosNotifications fontSize={"20"} />
                  </ListItemPrefix>
                  Orders
                </div>
              </NavLink>
            )}

            {role === "restaurant-handler" && (
              <NavLink to="/restaurant/dashboard/custom-burger">
                <div className="flex p-3 font-bold">
                  <ListItemPrefix>
                    <PiHamburgerFill fontSize={"20"} />
                  </ListItemPrefix>
                  Custom Burger
                </div>
              </NavLink>
            )}

            {role === "restaurant-handler" && (
              <NavLink to="/restaurant/dashboard/add-new-food">
                <div className="flex p-3 font-bold">
                  <ListItemPrefix>
                    <IoMdAddCircle fontSize={"20"} />
                  </ListItemPrefix>
                  Add New Food
                </div>
              </NavLink>
            )}

            {role === "restaurant-handler" && (
              <NavLink to="/restaurant/dashboard/my-foods">
                <div className="flex p-3 font-bold">
                  <ListItemPrefix>
                    <IoFastFood fontSize={"20"} />
                  </ListItemPrefix>
                  My Foods
                </div>
              </NavLink>
            )}

            {/* Common route */}
            <button className="bg-transparent" onClick={handleLogOut}>
              <div className="flex p-3 font-bold">
                <ListItemPrefix>
                  <FaPowerOff fontSize={"20"} />
                </ListItemPrefix>
                Log Out
              </div>
            </button>
          </List>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
