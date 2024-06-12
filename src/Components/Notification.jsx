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
      const res = await axiosSecure.get(`/rejectionFeedBack/${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle heading={"Your Notifications"} />
      <div className="lg:mx-10">
        <h3 className="font-bold">Total Notifications: {notify.length}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {notify.map((item) => (
            <div key={item._id} role="alert" className="alert alert-warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <div>
                <h4 className="text-2xl">{item.reason}</h4>
                <p>{item.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
