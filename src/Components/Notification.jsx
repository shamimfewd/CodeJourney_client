import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import SectionTitle from "../Shired/SectionTitle";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const Notification = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: notify = [] } = useQuery({
    queryKey: ["notify"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/rejectionFeedBack`);
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle heading={"Your Notifications"} />
      <div className="lg:mx-10">
        <h3 className="font-bold">Total Notifications: {notify.length}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notify.map((item) => (
            <div key={item._id} className="card  bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{item.reson}</h2>
                <p>{item.feedback.slice(0, 50)}...</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
