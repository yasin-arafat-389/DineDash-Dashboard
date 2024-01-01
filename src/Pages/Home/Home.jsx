import { useState } from "react";
import { Helmet } from "react-helmet";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <Helmet>
        <title>Register Your Restaurant</title>
      </Helmet>

      <div className="min-h-screen flex flex-col items-center justify-center bg-[#EAECCC]">
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
            <form>
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
                    className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
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
                    className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
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
                        : "Select restaurant logo"}
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

              <div className="flex w-full">
                <button
                  type="submit"
                  className="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
                >
                  <span className="mr-2 uppercase">Register</span>
                  <span></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
