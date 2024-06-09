import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import ApplyAgain from "./ApplyAgain";
import { useState } from "react";
import SectionTitle from "../../../Shired/SectionTitle";

const MySession = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: session = [] } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/mySession/${user.email}`);
      return res.data;
    },
  });

  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState("");
  let subtitle;

  function openModal(item) {
    setIsOpen(true);
    setCurrentItem(item);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
    setCurrentItem("");
  }

  return (
    <div className="lg:mt-10">
      <SectionTitle
        heading={"My Session"}
        subHeading={"Sessions Created by You"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {session.map((item) => (
          <div
            key={item._id}
            className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
          >
            <div className=" p-4 md:p-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>

              <div className="flex mt-2 item-center">{item.status}</div>

              <ApplyAgain
                afterOpenModal={afterOpenModal}
                openModal={openModal}
                closeModal={closeModal}
                modalIsOpen={modalIsOpen}
                item={currentItem}
              />
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                className="flex justify-between mt-3 "
              >
                <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                  ${item.price}
                </h3>
                <div>
                  {item.status === "Rejected" && (
                    <button
                      onClick={() => openModal(item)}
                      className="btn btn-md"
                    >
                      Apply Again
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySession;
