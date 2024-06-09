import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Payment from "./Dashboard/Payment";
import SectionTitle from "../Shired/SectionTitle";

const BookingPage = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState("");
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const loadedData = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();

  const currentSession = loadedData.find((item) => item._id === id);

  const onSubmit = async (data) => {
    // reset();
    // const sessionItem = {
    //   title: data.title,
    //   tutorName: data.tutorName,
    //   tutorEmail: data.tutorEmail,
    //   registrationStart: new Date(data.registrationStart),
    //   registrationEnd: new Date(data.registrationEnd),
    //   description: data.description,
    //   classStart: data.classStart,
    //   classEnd: data.classEnd,
    //   price: parseInt(data.price),
    //   userEmail: user.email,
    //   status: "Pending",
    // };
    // const bookedSession = await axiosSecure.post(
    //   "/bookingSession",
    //   sessionItem
    // );
    //   if (bookedSession.data.insertedId) {
    //     Swal.fire({
    //       position: "top-end",
    //       icon: "success",
    //       title: `Booked successfully`,
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //     navigate("/");
    //   }
  };

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
    <div className="mt-10">
      <SectionTitle heading={'Confirm Order'}/>
      <form onSubmit={handleSubmit(onSubmit)} className="w-8/12 mx-auto">
        <div>
          <label className="form-control w-full MY-6">
            <div className="label">
              <span className="label-text">
                Session Title{""}
                <span className="text-orange-600">*</span>
              </span>
            </div>
            <input
              type="text"
              disabled
              placeholder="session title"
              // {...register("title", { required: true })}
              defaultValue={currentSession.title}
              className="input input-bordered w-full "
            />
          </label>
        </div>

        <div className="flex items-center gap-x-4">
          <div className="w-full">
            <label className="form-control w-full MY-6">
              <div className="label">
                <span className="label-text">
                  Tutor Name{""}
                  <span className="text-orange-600">*</span>
                </span>
              </div>
              <input
                type="text"
                disabled
                placeholder="tutor name"
                // {...register("tutorName", { required: true })}
                defaultValue={currentSession.tutorName}
                className="input input-bordered w-full "
              />
            </label>
          </div>

          <div className="w-full">
            <label className="form-control w-full MY-6">
              <div className="label">
                <span className="label-text">
                  Tutor Email{""}
                  <span className="text-orange-600">*</span>
                </span>
              </div>
              <input
                disabled
                type="email"
                placeholder="tutor email"
                // {...register("tutorEmail", { required: true })}
                defaultValue={currentSession.tutorEmail}
                className="input input-bordered w-full "
              />
            </label>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <div className="w-full">
            <label className="form-control w-full MY-6">
              <div className="label">
                <span className="label-text">
                  Registration Start{""}
                  <span className="text-orange-600">*</span>
                </span>
              </div>
              <input
                type="date"
                disabled
                // {...register("registrationStart", { required: false })}
                placeholder="session start"
                defaultValue={currentSession.registrationStart}
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="w-full">
            <label className="form-control w-full MY-6">
              <div className="label">
                <span className="label-text">
                  Registration End{""}
                  <span className="text-orange-600">*</span>
                </span>
              </div>
              <input
                type="date"
                disabled
                // {...register("registrationEnd", { required: false })}
                placeholder="session end"
                defaultValue={currentSession.registrationEnd}
                className="input input-bordered w-full "
              />
            </label>
          </div>
        </div>

       
        <div className="w-full">
          <label className="form-control w-full MY-6">
            <div className="label">
              <span className="label-text">
                Price{""}
                <span className="text-orange-600">*</span>
              </span>
            </div>

            <input
              type="number"
              disabled
              // {...register("price", { required: true })}
              placeholder="Price"
              defaultValue={currentSession.price}
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">
                Session Description{""}
                <span className="text-orange-600">*</span>
              </span>
            </div>
            <textarea
              // {...register("description", { required: true })}
              disabled
              className="textarea textarea-bordered h-24"
              defaultValue={currentSession.description}
              placeholder="description"
            ></textarea>
          </label>
        </div>

        <div className="pt-10">
          <Payment
            afterOpenModal={afterOpenModal}
            openModal={openModal}
            closeModal={closeModal}
            modalIsOpen={modalIsOpen}
            item={currentItem}
          />
        </div>

        <button onClick={() => openModal(currentSession)} className="btn bg-[#1E90FF] text-white">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
