import { Outlet } from "react-router-dom";
import ScrollToTop from "../Utilities/ScrollToTop/ScrollToTop";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Toaster position="top-right" reverseOrder={false} />
      <Outlet />
    </div>
  );
};

export default MainLayout;
