import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import MaterialsModal from "./MaterialsModal";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useState } from "react";

const ApprovedSession = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: session = [] } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/approvedSession/${user.email}`);
      return res.data;
    },
  });

  let [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  function open(item) {
    setIsOpen(true);
    setCurrentItem(item);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <div>
      <h1>{session.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {session.map((item) => (
          <div
            key={item._id}
            className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
          >
            <div className="w-2/3 p-4 md:p-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>

              <span className=" mt-2 px-2 py-1 item-center text-blue-600  bg-green-300 rounded-full">
                <small>{item.status}</small>{" "}
              </span>

              <div className="flex justify-between mt-3 ">
                <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                  ${item.price}
                </h3>
                <MaterialsModal
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  close={close}
                  item={currentItem}
                />

                <button onClick={() => open(item)} className="btn btn-primary">
                  Upload Materials
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovedSession;
