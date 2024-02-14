import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import RiderDetailsSkeletonLoader from "./RiderDetailsSkeletonLoader";
const RiderDetails = () => {
  let axios = useAxios();

  let { data: riders = [], isLoading: isRiderLoading } = useQuery({
    queryKey: ["allRegisteredRiders"],
    queryFn: async () => {
      let res = await axios.get(`/all-registered-riders`).then();
      return res.data;
    },
  });

  if (isRiderLoading) {
    return <RiderDetailsSkeletonLoader />;
  }

  return (
    <div>
      <div>
        <div className="">
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
                        {riders.map((item, index) => (
                          <tr key={index}>
                            <td className="p-2 whitespace-nowrap">
                              <div className="flex items-center justify-center">
                                <div className="font-bold text-xl text-gray-800">
                                  {item.name}
                                </div>
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-center text-xl font-bold text-gray-800">
                                {item.phone}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-center text-xl font-bold text-gray-800">
                                {item.region}
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
      </div>
    </div>
  );
};

export default RiderDetails;
