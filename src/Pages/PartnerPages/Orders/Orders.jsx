import { useContext, useState } from "react";
import { authContext } from "../../../Contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import Loader from "../../../Utilities/Loader/Loader";
import NoDataFound from "../../../Utilities/NoDataFound/NoDataFound";
import { Button, Dialog } from "@material-tailwind/react";

const Orders = () => {
  let { user } = useContext(authContext);
  let axios = useAxios();

  let { data: orders = [], isLoading } = useQuery({
    queryKey: ["ordersFilteredByRestaurant"],
    queryFn: async () => {
      let res = await axios
        .get(`/orders/partner?name=${user.displayName}`)
        .then();
      return res.data;
    },
  });

  let orderedFoods = [];
  orders.forEach((item) => {
    orderedFoods = orderedFoods.concat(item.cartFood);
  });

  const [open, setOpen] = useState(false);
  const [foodDetails, setFoodDetails] = useState(false);

  const handleOpen = (foodDetails) => {
    setOpen(!open);
    setFoodDetails(foodDetails);
  };

  console.log(foodDetails);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {orders.length === 0 ? (
        <>
          <NoDataFound text={"No orders yet!!"} />
        </>
      ) : (
        <>
          <div>
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
                                Food
                              </div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                              <div className="font-semibold capitalize text-center">
                                Total Price
                              </div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-center capitalize">
                                Action
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                          {orderedFoods.map((item, index) => (
                            <tr key={index}>
                              <td className="p-2 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 mr-2 sm:mr-3">
                                    <img
                                      className="w-20 h-20 rounded-full border-2 border-blue-600"
                                      src={item.image}
                                    />
                                  </div>
                                  <div className="font-bold text-xl text-gray-800">
                                    {item.name}
                                  </div>
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-center text-xl font-bold text-gray-800">
                                  ৳ {item.totalPrice}
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-center font-medium text-green-500">
                                  <Button
                                    onClick={() => handleOpen(item)}
                                    className="bg-[#0866ff]"
                                  >
                                    See Details
                                  </Button>
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

            <Dialog className="p-3" open={open} handler={handleOpen}>
              <div className="flex gap-5">
                <div className="image-and-title flex flex-col justify-center w-2/5">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src={foodDetails.image}
                    alt=""
                  />
                </div>

                <div>Hi</div>
              </div>
            </Dialog>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
