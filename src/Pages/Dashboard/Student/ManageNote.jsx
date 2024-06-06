import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageNote = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: notes = [] } = useQuery({
    queryKey: ["notes"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myNotes/${user.email}`);
      console.log(res.data);
      return res.data;
    },
    
  });

  return (
    <div>
      {notes.length}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => (
          <div key={note._id}>
            <div className="card  bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{note.title}</h2>
                <p>{note.description}</p>
                <div className="card-actions justify-end">
                  <Link to={`/dashboard/updateNote/${note._id}`}>
                    <button className="btn btn-primary">Edit</button>
                  </Link>

                  <button className="btn btn-primary">Remove</button>
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
