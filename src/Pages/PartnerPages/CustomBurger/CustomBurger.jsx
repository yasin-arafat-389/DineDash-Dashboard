import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import Loader from "../../../Utilities/Loader/Loader";
import { useContext, useState } from "react";
import { authContext } from "../../../Contexts/AuthContext";
import BeCustomBurgerProvider from "../../../Components/BeCustomBurgerProvider/BeCustomBurgerProvider";
import { Button, Dialog, Input } from "@material-tailwind/react";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { FaRegEdit } from "react-icons/fa";

const CustomBurger = () => {
  let { user } = useContext(authContext);
  let axios = useAxios();

  let {
    data: providerInfo = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["providerInformation"],
    queryFn: async () => {
      let res = await axios
        .get(`/provider/status?name=${user.displayName}`)
        .then();
      return res.data;
    },
  });

  // Handle Update Price
  const [openUpdatePriceModal, setOpenUpdatePriceModal] = useState(false);
  const [ingredientsInfo, setIngredientsInfo] = useState(false);
  const [loading, setLoading] = useState(false);

  const openUpdatePrice = (ingredientsInfo) => {
    setOpenUpdatePriceModal(!openUpdatePriceModal);
    setIngredientsInfo(ingredientsInfo);
  };

  const handlePriceChange = (event) => {
    setIngredientsInfo({
      ...ingredientsInfo,
      price: event.target.value,
    });
  };

  const handleUpdatePrice = () => {
    setLoading(true);

    axios
      .post("/update/ingredients/price", {
        updatedPrice: ingredientsInfo.price,
        provider: user.displayName,
        ingredientToUpdate: ingredientsInfo.name,
      })
      .then(() => {
        setLoading(false);
        refetch();
        toast.success(`Price Updated Successfully!!`, {
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
        setOpenUpdatePriceModal(!openUpdatePriceModal);
      });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {providerInfo.length === 0 ? (
        <div>
          <BeCustomBurgerProvider refetch={refetch} />
        </div>
      ) : (
        <>
          <h2 className="flex flex-row flex-nowrap items-center mt-3">
            <span className="flex-grow block border-t border-green-600"></span>
            <span className="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-green-400 text-white">
              Your Offered Ingredients
            </span>
            <span className="flex-grow block border-t border-green-600"></span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
            {providerInfo.ing.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 border-2 border-gray-600 p-3 rounded-lg shadow-xl hover:shadow-2xl"
              >
                <div className="text-xl flex items-center gap-3">
                  <span>{item.name}</span>{" "}
                  <div>
                    {item.name === "Tomato" && (
                      <img src="/tomato.png" className="w-14 h-14" />
                    )}

                    {item.name === "Meat" && (
                      <img src="/burger-patty.png" className="w-12 h-12" />
                    )}

                    {item.name === "Lettuse" && (
                      <img src="/lettuce.png" className="w-12 h-12" />
                    )}

                    {item.name === "Cheese" && (
                      <img src="/cheese.png" className="w-12 h-12" />
                    )}
                  </div>
                </div>
                <span className="text-lg">Price: ৳ {item.price}</span>
                <button
                  onClick={() => openUpdatePrice(item)}
                  className="flex justify-center items-center text-lg gap-2 mt-2 bg-transparent text-green-800"
                >
                  <div>
                    <FaRegEdit />
                  </div>
                  <span>Update Price</span>
                </button>
              </div>
            ))}
          </div>

          {/* Modal to update ingredients price */}
          <Dialog
            size="xs"
            open={openUpdatePriceModal}
            handler={openUpdatePrice}
          >
            <div className="p-5">
              <span className="text-xl text-gray-800">
                Update price of {ingredientsInfo.name}
              </span>

              <div className="mt-3">
                <Input
                  type="number"
                  label="Price"
                  defaultValue={ingredientsInfo.price}
                  onChange={handlePriceChange}
                />
              </div>

              <div className="mt-4 flex gap-3">
                <Button
                  onClick={handleUpdatePrice}
                  className="bg-green-600"
                  disabled={loading ? true : false}
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-5 ">
                      <ImSpinner9 className="animate-spin text-[20px]" />
                      Updating
                    </div>
                  ) : (
                    "Update"
                  )}
                </Button>

                <Button
                  className="bg-red-600"
                  onClick={() => setOpenUpdatePriceModal(!openUpdatePriceModal)}
                  disabled={loading ? true : false}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Dialog>
        </>
      )}
    </div>
  );
};

export default CustomBurger;
