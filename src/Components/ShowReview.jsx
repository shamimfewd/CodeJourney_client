import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { FaStar } from "react-icons/fa6";

const ShowReview = () => {
  const axiosSecure = useAxiosSecure();
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/showReview`);
      return res.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const renderStars = (rating) => {
    return (
      <div className="flex gap-2">
        {Array.from({ length: rating }, (_, index) => (
          <FaStar key={index} className="text-orange-400 text-2xl" />
        ))}
      </div>
    );
  };

  return (
    <div>
    
      {reviews.map((rev) => (
        <div key={rev._id} className="bg-white my-2 p-4 shadow-xl rounded-md">
          <span>{renderStars(rev.rating)}</span>
          <p className="">{rev.review}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowReview;
