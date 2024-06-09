import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Shired/SectionTitle";

const ViewAllNotes = () => {
  const axiosSecure = useAxiosSecure();
  const { data: notes = [] } = useQuery({
    queryKey: ["notes"],
    queryFn: async () => {
      const res = await axiosSecure.get("/noteForTutor");
      return res.data;
    },
  });
  return (
    <div>
      <div className="mt-10">
        <SectionTitle heading={"All Notes"} />
        <h3 className="font-bold">Total Notes:{notes.length}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note) => (
            <div
              key={note._id}
              className="card card-compact  bg-base-100 shadow-xl"
            >
              <div className="card-body">
                <h2 className="card-title">{note.title}</h2>
                <p>{note.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewAllNotes;
