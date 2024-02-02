import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import Loader from "../../../Utilities/Loader/Loader";
import { useContext } from "react";
import { authContext } from "../../../Contexts/AuthContext";
import BeCustomBurgerProvider from "../../../Components/BeCustomBurgerProvider/BeCustomBurgerProvider";

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
          <div>You are a provider</div>
        </>
      )}
    </div>
  );
};

export default CustomBurger;
