import { useQuery } from "@tanstack/react-query";
import SessionCard from "../../Components/SessionCard";

import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";
import SectionTitle from "../../Shired/SectionTitle";
// import { Link } from "react-router-dom";

const StudySession = () => {
  const axiosPublic = useAxiosPublic();
  const [visible, setVisible] = useState(6);

  const handleShowMore = () => {
    setVisible((preValue) => preValue + 2);
  };

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
        <SectionTitle heading={"Popular Sessions"} subHeading={"Courses"} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {session.slice(0, visible).map((card) => (
          <SessionCard key={card.id} card={card} />
        ))}
      </div>

      <div className="text-center  mt-6">
        {session.length > visible ? (
          <>
            <button
              className="btn mt-10 bg-[#ff6347] text-white"
              onClick={handleShowMore}
            >
              Load More
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default StudySession;
