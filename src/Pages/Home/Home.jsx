import { Button } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { MdOutlineAlternateEmail } from "react-icons/md";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";
import { ImSpinner9 } from "react-icons/im";
import { RiLockPasswordFill } from "react-icons/ri";
import { imageUpload } from "../../Utilities/ImageUpload/ImageUpload";
import { authContext } from "../../Contexts/AuthContext";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  let axios = useAxios();
  let { createUser, update, logOut } = useContext(authContext);
  let navigate = useNavigate();

  let [loading, setLoading] = useState(false);
  let [nextStep, setNextStep] = useState(false);

  let [restaurant, setRestaurant] = useState("");

  let [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  let [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  let handleNextStep = async () => {
    setLoading(true);

    if (!email) {
      Swal.fire({
        icon: "warning",
        text: "Please enter a valid email address",
      });
      setLoading(false);
      return;
    }

    axios.get(`/partner-request?email=${email}`).then((res) => {
      if (!res.data) {
        setLoading(false);
        Swal.fire({
          icon: "warning",
          showConfirmButton: false,
          text: "You have not applied for being a partner yet. Please send a partner request from the link below.",
          footer:
            '<a href="https://dine-dash-client.web.app/" target="_blank">Send a Partner Request Now</a>',
        });
        return;
      } else if (res.data.status === "pending") {
        setLoading(false);
        Swal.fire({
          icon: "warning",
          text: "Your partner request is still under review. You will get an email once admin approves your request.",
        });
        return;
      } else if (res.data.status === "rejected") {
        setLoading(false);
        Swal.fire({
          icon: "warning",
          text: "We are extremely sorry to inform you that your partner request has been rejected. ",
        });
        return;
      } else {
        setLoading(false);
        setNextStep(true);
      }

      setRestaurant(res.data.restaurantName);
    });
  };

  let handleRegister = async () => {
    setLoading(true);
    const passRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|:;<>,.?/~`])(.{6,})$/;
    const validPassword = passRegex.test(password);

    if (!validPassword) {
      Swal.fire({
        icon: "warning",
        text: "Password must be at least 6 characters long, containing at least one upper case and special character",
      });
      setLoading(false);
      return;
    }
    if (!selectedFile) {
      Swal.fire({
        icon: "warning",
        text: "You must select your restaurant logo",
      });
      setLoading(false);
      return;
    }

    let imgData = null;

    if (selectedFile) {
      let imageData = await imageUpload(selectedFile, setLoading);
      imgData = imageData;
    }

    createUser(email, password)
      .then(() => {
        update(restaurant, imgData?.data?.display_url)
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });

        logOut()
          .then(() => {
            setLoading(false);
            navigate("/login");
          })
          .catch((error) => {
            console.log(error);
          });

        toast.success(`Registration Successfull!!`, {
          style: {
            border: "2px solid green",
            padding: "8px",
            color: "#713200",
          },
          iconTheme: {
            primary: "green",
            secondary: "#FFFAEE",
          },
        });
      })
      .catch(() => {
        toast.error(`User Already Exists`, {
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
        setLoading(false);
      });
  };

  return (
    <div className="bg-[#EAECCC] min-h-screen flex flex-col justify-center items-center">
      <Helmet>
        <title>Register Your Restaurant</title>
      </Helmet>

      <div className=" flex flex-col items-center justify-center">
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
            Register your restaurant
          </div>
          <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
            Enter information about your restaurant carefully
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
                  onChange={handleEmailChange}
                  className={`
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400 ${
                      nextStep && "cursor-not-allowed"
                    }`}
                  disabled={nextStep ? true : false}
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {nextStep && (
              <>
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
                      onBlur={handlePasswordChange}
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
                      placeholder="Enter a password"
                    />
                  </div>
                </div>

                {/* Logo */}
                <div className="w-full mt-4">
                  <div>
                    <label className="flex gap-4 p-2 cursor-pointer border-2 border-gray-400 rounded-lg shadow-xl justify-center items-center">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span className="text-base line-clamp-1 font-medium">
                        {selectedFile
                          ? selectedFile.name
                          : "Select your restaurant logo"}
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        id="image"
                        name="image"
                        accept="image/*"
                      />
                    </label>
                  </div>
                </div>
              </>
            )}

            <Button
              onClick={nextStep ? handleRegister : handleNextStep}
              fullWidth
              className={`bg-blue-500 capitalize text-[16px] mt-7`}
              disabled={loading ? true : false}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-4">
                  <ImSpinner9 className="animate-spin text-[20px]" />
                  Please Wait
                </div>
              ) : (
                "Next"
              )}
            </Button>
          </div>
        </div>
      </div>

      <p className="text-sm mt-5 font-bold text-gray-600">
        Already a partner?{" "}
        <span className="text-blue-600 hover:underline">
          <Link to="/login">Login to your dashboard</Link>
        </span>
      </p>
    </div>
  );
};

export default Home;
