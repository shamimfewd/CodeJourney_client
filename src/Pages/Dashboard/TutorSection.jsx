import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SectionTitle from "../../Shired/SectionTitle";
import useAuth from "../../Hooks/useAuth";
// import { Link } from "react-router-dom";

const TutorSection = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data: tutorSession = [] } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/session/${user.email}`);
      return res.data;
    },
  });

  console.log(tutorSession);
  return (
    <div>
      <SectionTitle heading={"this is test heading"} />

      <div>
        {tutorSession.map((item) => (
          <div
            key={item._id}
            className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
          >
            <div className="w-2/3 p-4 md:p-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {item.title}
            {console.log(item.title)}
              </h3>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>

              <div className="flex mt-2 item-center">
                <svg
                  className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>

                <svg
                  className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>

                <svg
                  className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>

                <svg
                  className="w-5 h-5 text-gray-500 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>

                <svg
                  className="w-5 h-5 text-gray-500 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              </div>

              <div className="flex justify-between mt-3 ">
                <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                  $220
                </h1>

             
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorSection;
