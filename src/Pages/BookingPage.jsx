import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const BookingPage = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const loadedData = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();

  const currentSession = loadedData.find((item) => item._id === id);

  const onSubmit = async (data) => {
    reset();
    const sessionItem = {
      title: data.title,
      tutorName: data.tutorName,
      tutorEmail: data.tutorEmail,
      registrationStart: new Date(data.registrationStart),
      registrationEnd: new Date(data.registrationEnd),
      description: data.description,
      classStart: data.classStart,
      classEnd: data.classEnd,
      price: parseInt(data.price),
      userEmail: user.email,
      status: "Pending",
    };

    const bookedSession = await axiosSecure.post(
      "/bookingSession",
      sessionItem
    );

    if (bookedSession.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Booked successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    }
  };
  return (
    <div>
      <form className="w-8/12 mx-auto" onSubmit={handleSubmit(onSubmit)}>
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
              placeholder="session title"
              {...register("title", { required: true })}
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
                placeholder="tutor name"
                {...register("tutorName", { required: true })}
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
                type="email"
                placeholder="tutor email"
                {...register("tutorEmail", { required: true })}
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
                {...register("registrationStart", { required: false })}
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
                {...register("registrationEnd", { required: false })}
                placeholder="session end"
                defaultValue={currentSession.registrationEnd}
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
                  Class Start{""}
                  <span className="text-orange-600">*</span>
                </span>
              </div>
              <input
                type="time"
                {...register("classStart", { required: true })}
                placeholder="session start"
                defaultValue={currentSession.classStart}
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="w-full">
            <label className="form-control w-full MY-6">
              <div className="label">
                <span className="label-text">
                  Class End{""}
                  <span className="text-orange-600">*</span>
                </span>
              </div>
              <input
                type="time"
                {...register("classEnd", { required: true })}
                placeholder="session end"
                defaultValue={currentSession.classEnd}
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
              {...register("price", { required: true })}
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
              {...register("description", { required: true })}
              className="textarea textarea-bordered h-24"
              defaultValue={currentSession.description}
              placeholder="description"
            ></textarea>
          </label>
        </div>

        <button className="btn">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingPage;
