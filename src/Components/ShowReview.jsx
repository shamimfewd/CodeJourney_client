import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { FaStar } from "react-icons/fa6";

const ShowReview = () => {
  const axiosSecure = useAxiosSecure();
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/showReview");
      return res.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{reviews.length}</h1>
      {reviews.map((rev) => (
        <div key={rev._id} className="bg-white my-2 p-4 shadow-xl rounded-md">
          {/* <span>{rev.rating}</span> */}
          {rev.rating === 1 ? (
            <div className="flex gap-2">
              <FaStar className="text-orange-400"/>
            </div>
          ) : (
            ""
          )}
          {rev.rating === 2 ? (
            <div className="flex gap-2">
              <FaStar className="text-orange-400 text-2xl" />
              <FaStar className="text-orange-400 text-2xl" />
            </div>
          ) : (
            ""
          )}
          {rev.rating === 3 ? (
            <div className="flex gap-2">
              <FaStar className="text-orange-400 text-2xl" />
              <FaStar className="text-orange-400 text-2xl" />
              <FaStar className="text-orange-400 text-2xl" />
            </div>
          ) : (
            ""
          )}
          {rev.rating === 4 ? (
            <div className="flex gap-2">
              <FaStar className="text-orange-400 text-2xl" />
              <FaStar className="text-orange-400 text-2xl" />
              <FaStar className="text-orange-400 text-2xl" />
              <FaStar className="text-orange-400 text-2xl" />
            </div>
          ) : (
            ""
          )}
          {rev.rating === 5 ? (
            <div className="flex gap-2">
              <FaStar className="text-orange-400 text-2xl" />
              <FaStar className="text-orange-400 text-2xl" />
              <FaStar className="text-orange-400 text-2xl" />
              <FaStar className="text-orange-400 text-2xl" />
              <FaStar className="text-orange-400 text-2xl" />
            </div>
          ) : (
            ""
          )}
          <p className="">{rev.review}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowReview;
