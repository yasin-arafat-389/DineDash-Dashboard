import { Button } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { authContext } from "../../Contexts/AuthContext";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import useRole from "../../Hooks/useRole";

const Login = () => {
  const [loading, setLoading] = useState(false);
  let { login, user } = useContext(authContext);
  let navigate = useNavigate();
  let [role] = useRole();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  let handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    login(formData.email, formData.password)
      .then(() => {
        navigate(
          role === "admin"
            ? "/admin/dashboard/overview"
            : "/restaurant/dashboard/overview",
          {
            replace: true,
          }
        );
      })
      .catch((error) => {
        setLoading(false);
        if (error) {
          toast.error(`Invalid email or password!!`, {
            style: {
              border: "2px solid red",
              padding: "8px",
              color: "#713200",
            },
            iconTheme: {
              primary: "red",
              secondary: "#FFFAEE",
            },
          });
        }
      });
  };

  if (user) {
    return <Navigate to="/dashboard/overview" />;
  }

  return (
    <div>
      <Helmet>
        <title>Login to your dashboard</title>
      </Helmet>

      <form onSubmit={handleLogin}>
        {" "}
        <div className="min-h-screen flex flex-col pt-20 items-center bg-gray-100">
          <div
            className="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
        "
          >
            <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
              Login to your dashboard
            </div>
            <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
              and manage orders, payments, utilities etc.
            </div>

            <div className="mt-10">
              {/* Email */}
              <div className="flex flex-col mb-5">
                <div className="relative">
                  <div
                    className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                  >
                    <MdOutlineAlternateEmail className="text-blue-500 font-bold" />
                  </div>

                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400`}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col mb-5">
                <div className="relative">
                  <div
                    className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                  >
                    <RiLockPasswordFill className="text-blue-500 font-bold" />
                  </div>

                  <input
                    type="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                      `}
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <Button
                type="submit"
                fullWidth
                className={`bg-blue-500 capitalize text-[16px] mt-7`}
                disabled={loading ? true : false}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-5 ">
                    <ImSpinner9 className="animate-spin text-[20px]" />
                    Logging In
                  </div>
                ) : (
                  "Login"
                )}
              </Button>
            </div>
          </div>

          <div className="flex justify-center items-center mt-6">
            <p className="text-sm font-bold text-gray-600">
              Not a partner yet?{" "}
              <span className="text-blue-600 hover:underline">
                <Link
                  to="https://dine-dash-client.web.app/partner-request"
                  target="_blank"
                >
                  Send a Partner Request Now
                </Link>
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
