import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllMaterials = () => {
  const axiosSecure = useAxiosSecure();
  const { data: materials = [] } = useQuery({
    queryKey: ["materials"],
    queryFn: async () => {
      const res = await axiosSecure.get("/materialsForAdmin");
      return res.data;
    },
  });
  return (
    <div>
      <h3 className="font-bold">Total Materials: {materials.length}</h3>
    </div>
  );
};

export default AllMaterials;