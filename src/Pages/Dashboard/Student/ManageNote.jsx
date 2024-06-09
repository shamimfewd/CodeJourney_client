import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Shired/SectionTitle";

const ManageNote = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: notes = [], refetch } = useQuery({
    queryKey: ["notes"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myNotes/${user.email}`);
      return res.data;
    },
  });

  const handleDelete = (note) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delNote/${note._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });

            // const remaining = notes.filter((item) => item._id !== user._id);
            // notes.push(remaining);
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle heading={"Manage Your Note"} />
      <h3 className="font-bold">Total Notes:{notes.length}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => (
          <div key={note._id}>
            <div className="card  bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{note.title}</h2>
                <p>{note.description}</p>
                <div className="card-actions justify-end">
                  <Link to={`/dashboard/updateNote/${note._id}`}>
                    <button className="btn ">
                      <FaRegEdit className="text-2xl text-gray-600" />
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(note)}
                    className="btn text-orange-600"
                  >
                    <FaRegTrashAlt className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageNote;
