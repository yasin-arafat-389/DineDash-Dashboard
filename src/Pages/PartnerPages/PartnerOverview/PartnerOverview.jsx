import { IoRestaurantOutline } from "react-icons/io5";

const PartnerOverview = () => {
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
            <p className="text-3xl">12,768</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center bg-gray-200 border rounded-sm overflow-hidden shadow">
          <div className="p-4 bg-green-400">
            <IoRestaurantOutline className="text-white text-[60px]" />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Restaurants</h3>
            <p className="text-3xl">12,768</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center bg-gray-200 border rounded-sm overflow-hidden shadow">
          <div className="p-4 bg-green-400">
            <IoRestaurantOutline className="text-white text-[60px]" />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Restaurants</h3>
            <p className="text-3xl">12,768</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerOverview;
