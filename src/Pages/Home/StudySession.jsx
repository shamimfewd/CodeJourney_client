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
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {session.map((card) => (
          <SessionCard key={card.id} card={card} />
        ))}
      </div>
    </>
  );
};

export default StudySession;
