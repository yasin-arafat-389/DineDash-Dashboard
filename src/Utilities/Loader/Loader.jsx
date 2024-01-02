import { GridLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <GridLoader color="#36d7b7" size={40} />
    </div>
  );
};

export default Loader;
