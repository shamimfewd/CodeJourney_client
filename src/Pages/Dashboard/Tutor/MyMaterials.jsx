import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import SectionTitle from "../../../Shired/SectionTitle";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const MyMaterials = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: materials = [], refetch } = useQuery({
    queryKey: ["materials"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myMaterials/${user.email}`);
      return res.data;
    },
  });

  // delete material
  const handleRemove = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delMaterial/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "session has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="mt-10 mr-10">
      <SectionTitle heading={"My Materials"} />
      <h3 className="font-bold mb-4">My Total Materials:{materials.length}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {materials.map((material) => (
          <div
            key={material._id}
            className="card card-compact  bg-base-100 shadow-xl"
          >
            <figure>
              <img  src={material.image} alt="image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{material.title}</h2>

              <div className="card-actions  justify-end">
                <span className="mt-2 text-blue-700">
                  <a href={material.link}>Drive Link</a>
                </span>
                <button
                  onClick={() => handleRemove(material._id)}
                  className="btn"
                >
                  <FaTrashAlt className="text-2xl text-red-500" />
                </button>
                <Link to={`/dashboard/updateMaterial/${material._id}`}>
                  <button className="btn">
                    <FaEdit className="text-2xl text-gray-600" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyMaterials;
