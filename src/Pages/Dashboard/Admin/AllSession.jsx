import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
// import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SectionTitle from "../../../Shired/SectionTitle";
import { FaEdit, FaTrash } from "react-icons/fa";
import FeedBack from "./FeedBack";

const AllSession = ({ id }) => {
  const axiosSecure = useAxiosSecure();
  const [statusData, setStatusData] = useState([]);

  // featch all session
  const getData = async () => {
    const { data } = await axiosSecure.get("/session");
    setStatusData(data);
  };

  // featch a specific session
  const spesicicData = async () => {
    const { data } = await axiosSecure.get(`/session/${id}`);
    setStatusData([data]);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (id) {
      spesicicData();
    }
  }, [id]);

  // change status
  const handleStatus = async (id, prevSta, status, price) => {
    console.log(price);
    if (prevSta === status) return;
    if (prevSta === "Approved")
      if (prevSta === "Rejected") {
        handleReject(id);
      }
    await axiosSecure.patch(`/updateSta/${id}`, { status });
    getData();
  };

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = async (data) => {
  //   const upPrice = {
  //     price: data.price,
  //   };

  //   const priceUpdate = await axiosSecure.patch(`/updatePrice/${id}`, upPrice);
  //   if (priceUpdate.data.modifiedCount > 0) {
  //     // show success popup
  //     Swal.fire({
  //       position: "top-end",
  //       icon: "success",
  //       title: `Price Successfully Updated`,
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //   }
  // };

  const handleReject = (id) => {
    const remaining = statusData.filter((item) => item._id !== id);
    setStatusData(remaining);
  };

  // delete session
  const handleRemove = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delSession/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "session has been deleted.",
              icon: "success",
            });
            const remaining = statusData.filter((item) => item._id !== _id);
            setStatusData(remaining);
          }
        });
      }
    });
  };
  // reject modal

  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState("");
  let subtitle;

  function openModal(item) {
    setIsOpen(true);
    setCurrentItem(item);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
    setCurrentItem("");
  }

  return (
    <div className="mt-10 lg:ml-10 lg:mr-10">
      <SectionTitle heading={"All Session"} />

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#1E90FF] ">
              <tr className="text-lg text-white">
                <th>#</th>
                <th>Session Title</th>
                <th>Tutor Name</th>
                <th>Tutor Email</th>
                <th>Session Price</th>
                <th>Status</th>
                <th>Action</th>
                <th>Edit</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {statusData.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.title}</td>
                  <td>{item.tutorName}</td>
                  <td>{item.tutorEmail}</td>
                  <td>{item.price}</td>
                  <td>
                    <span
                      className={`px-2 py-1 rounded-2xl ${
                        item.status === "Pending" ? "bg-yellow-300" : ""
                      } ,${item.status === "Approved" ? "bg-green-300" : ""},${
                        item.status === "Rejected" ? "bg-red-300" : ""
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td>
                    <details className="dropdown">
                      <summary className="m-1 btn">Action</summary>
                      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li
                          onClick={() => {
                            handleStatus(item._id, item.status, "Approved");
                          }}
                        >
                          <Link to={`/dashboard/updatePrice/${item._id}`}>
                            <a>Approved</a>
                          </Link>
                        </li>

                        <li
                          onClick={() =>
                            handleStatus(item._id, item.status, "Rejected")
                          }
                        >
                          <a onClick={() => openModal(item)}>Reject</a>
                        </li>
                      </ul>
                    </details>
                  </td>
                  <td>
                    {" "}
                    <Link
                      className="cursor-pointer"
                      to={`/dashboard/updateSession/${item._id}`}
                    >
                      <FaEdit className="text-2xl" />
                    </Link>{" "}
                  </td>
                  <td>
                    <button onClick={() => handleRemove(item._id)}>
                      <FaTrash className="text-[#FF6347] text-2xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <FeedBack
          afterOpenModal={afterOpenModal}
          openModal={openModal}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          item={currentItem}
        />
      </div>
    </div>
  );
};

export default AllSession;
