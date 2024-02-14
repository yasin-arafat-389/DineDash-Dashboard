const RiderDetailsSkeletonLoader = () => {
  return (
    <div>
      <style>
        {`
        @keyframes pulse {
            0% {
            background-position: 100% 0;
            }
            100% {
            background-position: -100% 0;
            }
        }

        .animate-pulse {
            background-image: linear-gradient(to right, rgba(255,255,255,0) 0%, #ccc 50%, rgba(255,255,255,0) 100%);
            background-size: 200% 100%;
            animation: pulse 1.2s infinite;
        }
    `}
      </style>

      <section className="antialiased text-gray-600 mt-5">
        <div className="flex flex-col h-full ">
          <div className="w-full bg-gray-200 shadow-lg rounded-sm border border-gray-200">
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full ">
                  <thead className="text-md font-semibold uppercase text-white bg-[#0866ff]">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center capitalize">
                          Name
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold capitalize text-center">
                          Phone
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center capitalize">
                          Region
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {[1, 2, 3, 4].map((item, index) => (
                      <tr key={index}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center justify-center">
                            <h1 className="h-8 w-[30%] rounded-lg bg-gray-400 animate-pulse"></h1>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center justify-center">
                            <h1 className="h-8 w-[30%] rounded-lg bg-gray-400 animate-pulse"></h1>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center justify-center">
                            <h1 className="h-8 w-[30%] rounded-lg bg-gray-400 animate-pulse"></h1>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RiderDetailsSkeletonLoader;
