import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import SectionTitle from "../../../Shired/SectionTitle";

const BookedSession = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: sessions = [] } = useQuery({
    queryKey: ["sessions", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/getPurchaseSession`);

      return res.data;
    },
  });
  return (
    <div className="lg:mx-10">
      <SectionTitle heading={"My Booked Session"} />
      <h3 className="font-bold">booked session: {sessions.length}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sessions.map((session) => (
          <div key={session._id} className="card  bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{session.title}</h2>
              <p>{session.description.slice(0, 50)}...</p>
              <div className="card-actions justify-end">
              
                <Link to={`/dashboard/singleBooked`}>
                  <button className="btn text-white bg-[#1E90FF]">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookedSession;
