import { Button } from "@material-tailwind/react";

const BeCustomBurgerProvider = () => {
  return (
    <div>
      <div className="bg-gray-300 rounded-2xl p-4  shadow shadow-sky-800 flex flex-col justify-around items-stretch">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-yellow-100 rounded-full flex justify-center items-center">
            <svg
              aria-hidden="true"
              stroke="red"
              width={"50px"}
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
        </div>
        <span className="text-black font-semibold text-xl text-center mt-5">
          {`You're`} not yet providing custom burger service!!
        </span>

        <span className="text-gray-600 text-center mt-2 text-lg">
          To get started, please click the following button and select which
          ingredients you want to provide and how much would you charge for each
          ingredients and you are good to go.
        </span>

        <Button className="capitalize mt-5 w-[50%] mx-auto bg-[#0866ff] text-lg">
          Become a custom burger service provider
        </Button>
      </div>
    </div>
  );
};

export default BeCustomBurgerProvider;
