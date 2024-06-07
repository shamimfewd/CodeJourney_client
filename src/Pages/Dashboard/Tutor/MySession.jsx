import { useQuery } from "@tanstack/react-query";
// import SectionTitle from "../../Shired/SectionTitle";

import useAuth from "../../../Hooks/useAuth";
// import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MySession = () => {
  const axiosSecure = useAxiosSecure();
  //   const [test, setTest] = useState([]);
  //   console.log(test);
  const { user } = useAuth();

  //   useEffect(() => {
  //     const getData = async () => {

  //       const { data } = await axiosSecure.get(`mySession/${user?.email}`);
  //       setTest(data);
  //     };

  //     getData();
  //   }, [axiosSecure]);

  const { data: session = [] } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/mySession/${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {session.map((item) => (
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

              <div className="flex mt-2 item-center">{item.status}</div>

              <div className="flex justify-between mt-3 ">
                <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                  ${item.price}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySession;
