import { List, ListItemPrefix } from "@material-tailwind/react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPersonAdd } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";
import { useContext } from "react";
import { authContext } from "../../Contexts/AuthContext";
import { MdDashboard } from "react-icons/md";
import useRole from "../../Hooks/useRole";

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
              className="w-[50px] h-[50px] rounded-full object-cover"
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
