import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllMaterials = () => {
  const axiosSecure = useAxiosSecure();
  const { data: materials = [] } = useQuery({
    queryKey: ["materials"],
    queryFn: async () => {
      const res = await axiosSecure.get("/materialsStu");
      return res.data;
    },
  });
  return (
    <div>
      <div>
        <h1>{materials.length}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {materials.map((material) => (
            <div
              key={material._id}
              className="card card-compact  bg-base-100 shadow-xl"
            >
              <figure>
                <img src={material.image} alt="image" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{material.title}</h2>

                <div className="card-actions justify-end">
                  <button className="btn">
                    <a href={material.link}>Drive Link</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMaterials;
