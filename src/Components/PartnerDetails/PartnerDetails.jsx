import { useQuery } from "@tanstack/react-query";
import Loader from "../../Utilities/Loader/Loader";
import { Dialog } from "@material-tailwind/react";
import { useState } from "react";
import useAxios from "../../Hooks/useAxios";

const PartnerDetails = () => {
  let axios = useAxios();

  let { data: restaurants = [], isLoading: isRestaurantsLoading } = useQuery({
    queryKey: ["restaurantDetails"],
    queryFn: async () => {
      let res = await axios.get(`/restaurants-and-details`).then();
      return res.data;
    },
  });

  console.log(restaurants);

  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [offeredFoods, setOfferedFoods] = useState([]);

  const handleOpen = (details) => {
    setOpen(!open);
    setDetails(details);
  };

  if (isRestaurantsLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-7 mt-5 mb-10">
        {restaurants.map((item, index) => (
          <div className="" key={index}>
            <div className="bg-gray-200 font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
              <img
                className="mb-3 w-32 h-32 object-cover border-4 border-blue-500 rounded-full shadow-lg mx-auto"
                src={item.restaurant.thumbnail}
              />
              <h1 className="text-lg text-gray-700">
                {" "}
                {item.restaurant.name}{" "}
              </h1>

              <button
                onClick={() => {
                  handleOpen(item.restaurant);
                  setOfferedFoods(item.foods);
                }}
                className="bg-indigo-600 px-8 py-2 mt-4 rounded-3xl text-gray-100 font-semibold tracking-wide"
              >
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal to see details */}
      <Dialog open={open} size="md" handler={handleOpen}>
        <div className="my-5">
          <div className="flex flex-col items-center">
            <span className="text-3xl text-black">
              Foods that{" "}
              <span className="text-blue-600 italic">{details.name}</span>{" "}
              offers
            </span>

            <div>
              {offeredFoods.length === 0 ? (
                <div>
                  <h1 className="mt-8 text-xl text-red-500">
                    No foods offered by {details.name} yet!!
                  </h1>
                </div>
              ) : (
                <>
                  <div className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    {offeredFoods.map((item, index) => (
                      <div
                        key={index}
                        className="mt-4 border-2 border-blue-500 rounded-lg p-2"
                      >
                        <div className="">
                          <img
                            className="mb-3 w-20 h-20 object-cover rounded-full shadow-lg mx-auto"
                            src={item.image}
                          />
                        </div>

                        <div>
                          <h1 className="text-center text-black">
                            {item.name}
                          </h1>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default PartnerDetails;
