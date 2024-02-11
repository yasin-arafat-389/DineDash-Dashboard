import React, { useContext } from "react";
import { Card, Drawer, List, ListItemPrefix } from "@material-tailwind/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa6";
import { authContext } from "../../Contexts/AuthContext";
import { MdDashboard } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { PiHamburgerFill } from "react-icons/pi";
import { IoMdAddCircle } from "react-icons/io";
import useRole from "../../Hooks/useRole";
import { IoFastFood } from "react-icons/io5";
import { BsFillArrowDownLeftCircleFill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";

const SideDrawer = () => {
  const [open, setOpen] = React.useState(false);

  let { logOut, user } = useContext(authContext);
  let navigate = useNavigate();
  let [role] = useRole();

  let handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div>
      <div>
        <GiHamburgerMenu onClick={openDrawer} className="text-[25px]" />

        <Drawer open={open} onClose={closeDrawer} className="p-4">
          <Card className="w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
              <div className="mb-2 p-4 flex items-center gap-3">
                <img
                  src={user?.photoURL || "https://i.ibb.co/HN9NtYY/user.png"}
                  className="w-[60px] h-[60px] border-2 border-blue-500 rounded-full object-cover"
                />
                <h1 className="text-sm font-bold">{user?.displayName}</h1>
              </div>
            </div>
            <List>
              <NavLink to="/dashboard/overview" onClick={closeDrawer}>
                <div className="flex p-3 font-bold">
                  <ListItemPrefix>
                    <MdDashboard fontSize={"20"} />
                  </ListItemPrefix>
                  Overview
                </div>
              </NavLink>

              {/* Admin routes */}
              {role === "admin" && (
                <NavLink
                  to="/admin/dashboard/partner-requests"
                  onClick={closeDrawer}
                >
                  <div className="flex p-3 font-bold">
                    <ListItemPrefix>
                      <IoPersonAdd fontSize={"20"} />
                    </ListItemPrefix>
                    Partner Requests
                  </div>
                </NavLink>
              )}

              {role === "admin" && (
                <NavLink
                  to="/admin/dashboard/rider-requests"
                  onClick={closeDrawer}
                >
                  <div className="flex p-3 font-bold">
                    <ListItemPrefix>
                      <MdDeliveryDining fontSize={"20"} />
                    </ListItemPrefix>
                    Rider Requests
                  </div>
                </NavLink>
              )}

              {/* Restaurant handlers routes */}
              {role === "restaurant-handler" && (
                <NavLink
                  to="/restaurant/dashboard/orders"
                  onClick={closeDrawer}
                >
                  <div className="flex p-3 font-bold">
                    <ListItemPrefix>
                      <IoIosNotifications fontSize={"20"} />
                    </ListItemPrefix>
                    Orders
                  </div>
                </NavLink>
              )}

              {role === "restaurant-handler" && (
                <NavLink
                  to="/restaurant/dashboard/custom-burger"
                  onClick={closeDrawer}
                >
                  <div className="flex p-3 font-bold">
                    <ListItemPrefix>
                      <PiHamburgerFill fontSize={"20"} />
                    </ListItemPrefix>
                    Custom Burger
                  </div>
                </NavLink>
              )}

              {role === "restaurant-handler" && (
                <NavLink
                  to="/restaurant/dashboard/add-new-food"
                  onClick={closeDrawer}
                >
                  <div className="flex p-3 font-bold">
                    <ListItemPrefix>
                      <IoMdAddCircle fontSize={"20"} />
                    </ListItemPrefix>
                    Add New Food
                  </div>
                </NavLink>
              )}

              {role === "restaurant-handler" && (
                <NavLink
                  to="/restaurant/dashboard/my-foods"
                  onClick={closeDrawer}
                >
                  <div className="flex p-3 font-bold">
                    <ListItemPrefix>
                      <IoFastFood fontSize={"20"} />
                    </ListItemPrefix>
                    My Foods
                  </div>
                </NavLink>
              )}

              {/* Rider routes */}
              {role === "rider" && (
                <NavLink
                  to="/rider/dashboard/incoming-deliveries"
                  onClick={closeDrawer}
                >
                  <div className="flex p-3 font-bold">
                    <ListItemPrefix>
                      <BsFillArrowDownLeftCircleFill fontSize={"20"} />
                    </ListItemPrefix>
                    Incoming Deliveries
                  </div>
                </NavLink>
              )}

              {role === "rider" && (
                <NavLink
                  to="/rider/dashboard/accepted-deliveries"
                  onClick={closeDrawer}
                >
                  <div className="flex p-3 font-bold">
                    <ListItemPrefix>
                      <FaCheckCircle fontSize={"20"} />
                    </ListItemPrefix>
                    Accepted Deliveries
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
          </Card>
        </Drawer>
      </div>
    </div>
  );
};

export default SideDrawer;
