/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../Contexts/AuthContext";
import Loader from "../Utilities/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  let location = useLocation();

  if (loading)
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Loader />
      </div>
    );

  if (!user) {
    return <Navigate state={location.pathname} to="/login" replace={true} />;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
