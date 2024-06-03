import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSessionCard = () => {
  const axiosPublic = useAxiosPublic();

  const { data: session = [] } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const res = await axiosPublic.get("/session");
      return res.data;
    },
  });

  return [session];
};

export default useSessionCard;
