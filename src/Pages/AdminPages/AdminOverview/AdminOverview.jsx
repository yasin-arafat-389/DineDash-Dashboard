import { IoRestaurantOutline } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import Loader from "../../../Utilities/Loader/Loader";
import useTotalRestaurant from "../../../Hooks/useTotalRestaurant";
import useTotalRider from "../../../Hooks/useTotalRider";
import useTotalOrdersPlaced from "../../../Hooks/useTotalOrdersPlaced";
import PartnerDetails from "../../../Components/PartnerDetails/PartnerDetails";

const AdminOverview = () => {
  let [totalRestaurant, totalRestaurantLoading] = useTotalRestaurant();
  let [totalRiders, totalRidersLoading] = useTotalRider();
  let [totalOrders, totalordersLoading] = useTotalOrdersPlaced();

  if (totalRestaurantLoading || totalRidersLoading || totalordersLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
        {/* Card 1 */}
        <div className="flex items-center bg-gray-200 border rounded-sm overflow-hidden shadow">
          <div className="p-4 bg-green-400">
            <IoRestaurantOutline className="text-white text-[60px]" />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Restaurants</h3>
            <p className="text-3xl">{totalRestaurant}</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center bg-gray-200 border rounded-sm overflow-hidden shadow">
          <div className="p-4 bg-green-400">
            <MdDeliveryDining className="text-white text-[60px]" />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Riders</h3>
            <p className="text-3xl">{totalRiders}</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center bg-gray-200 border rounded-sm overflow-hidden shadow">
          <div className="p-4 bg-green-400">
            <MdOutlineShoppingCartCheckout className="text-white text-[60px]" />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Orders Placed</h3>
            <p className="text-3xl">{totalOrders}</p>
          </div>
        </div>
      </div>

      <h2 className="flex flex-row flex-nowrap items-center mt-12">
        <span className="flex-grow block border-t border-black"></span>
        <span className="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-black text-white">
          My Partners
        </span>
        <span className="flex-grow block border-t border-black"></span>
      </h2>

      <PartnerDetails />
    </div>
  );
};

export default AdminOverview;
