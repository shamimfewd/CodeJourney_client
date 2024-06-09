import { useQuery } from "@tanstack/react-query";
import SessionCard from "../../Components/SessionCard";

import useAxiosPublic from "../../Hooks/useAxiosPublic";

const StudySession = () => {
  const axiosPublic = useAxiosPublic();

  const { data: session = [] } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const res = await axiosPublic.get("/sessionAtHome");
      return res.data;
    },
  });

  return (
    <div className="my-24 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-[#FF6347]">---Select According to Your Needs---</p>
        <h2 className="text-4xl font-bold text-gray-800">
          Our Popular Sessions
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {session.map((card) => (
          <SessionCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default StudySession;
