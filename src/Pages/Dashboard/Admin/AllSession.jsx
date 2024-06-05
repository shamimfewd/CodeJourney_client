import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import useSessionCard from "../../../Hooks/useSessionCard";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import ModalCom from "../../../Components/ModalCom";
// import { useParams } from "react-router-dom";

const AllSession = ({ id }) => {
  const axiosSecure = useAxiosSecure();
  const [statusData, setStatusData] = useState([]);
  const sessionCard = useSessionCard();
  console.log(sessionCard);
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

  //   const { data: session = [] } = useQuery({
  //     queryKey: ["session"],
  //     queryFn: async () => {
  //       const res = await axiosSecure.get("/session");
  //       return res.data;
  //     },
  //   });

  const handleStatus = async (id, prevSta, status) => {
    if (prevSta === status) return;
    if (prevSta === "Approved") return;
    await axiosSecure.patch(`/updateSta/${id}`, { status });

    getData();
  };
  // code for modal

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

  //   console.log(data);
  // };

  return (
    <div>
      all session
      {/* ======================== */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            This Session is Paid: {sessionCard.price}
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Session Price</span>
              </div>
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="Price"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.price && <span>This field is required</span>}
            </label>

            <button className="btn">submit</button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
      {/* <button className="btn">Close</button> */}
      {/* </form>
          </div>
        </div>
      </dialog> */}{" "}
      */
      {/* ================================================ */}
      <ModalCom />
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Session Title</th>
                <th>Tutor Name</th>
                <th>Tutor Email</th>
                <th>Session Price</th>
                <th>Status</th>
                <th>Action</th>
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
                          onClick={() =>
                            handleStatus(item._id, item.status, "Approved")
                          }
                        >
                          <a
                            className=""
                            onClick={() =>
                              document.getElementById("my_modal_1").showModal()
                            }
                          >
                            Approve
                          </a>
                        </li>
                        <li
                          onClick={() =>
                            handleStatus(item._id, item.status, "Rejected")
                          }
                        >
                          <a>Reject</a>
                        </li>
                      </ul>
                    </details>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllSession;
