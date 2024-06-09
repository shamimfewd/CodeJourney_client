import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import SectionTitle from "../../../Shired/SectionTitle";

const CreateSession = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

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
      status: "Pending",
    };

    const tutorSession = await axiosSecure.post("/session", sessionItem);
    console.log(tutorSession.data);
    if (tutorSession.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `session added successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <div className="w-8/12 mx-auto lg:mt-10 mb-10">
        <SectionTitle
          className="mt-10"
          heading={"Create a Session"}
          subHeading={"Show your Expertize"}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
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
                  defaultValue={user.displayName}
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
                  defaultValue={user.email}
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
                  {...register("registrationStart", { required: true })}
                  placeholder="session start"
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
                  {...register("registrationEnd", { required: true })}
                  placeholder="session end"
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
                placeholder="description"
              ></textarea>
            </label>
          </div>
          <br />
          <button className="btn bg-[#1E90FF] text-lg text-white">Add Session</button>
        </form>
      </div>
    </>
  );
};

export default CreateSession;
