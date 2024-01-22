import { Outlet } from "react-router-dom";
import ScrollToTop from "../Utilities/ScrollToTop/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { NavbarMain } from "../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <NavbarMain />
      <ScrollToTop />
      <Toaster position="top-right" reverseOrder={false} />
      <Outlet />
    </div>
  );
};

export default MainLayout;
