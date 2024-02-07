import { TbLoader3 } from "react-icons/tb";

const OverviewSkeletonLoader = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
        {[1, 2, 3].map((item, indes) => (
          <div
            key={indes}
            className="flex items-center bg-gray-200 border rounded-sm overflow-hidden shadow"
          >
            <div className="p-4 bg-green-400">
              <TbLoader3 className="text-white text-[60px] animate-spin" />
            </div>
            <div className="px-4 text-gray-700">
              <h3 className="text-sm tracking-wider">
                <div className="bg-gray-400 h-full text-gray-400">
                  Total Restaurant
                </div>
              </h3>
              <p className="text-3xl">
                <div className="bg-gray-400 text-gray-400 mt-2">6</div>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewSkeletonLoader;
