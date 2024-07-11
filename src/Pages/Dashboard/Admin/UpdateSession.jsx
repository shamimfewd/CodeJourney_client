import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";

const UpdateSession = () => {
  const axiosSecure = useAxiosSecure();
  const loadedData = useLoaderData();

  const { _id } = loadedData;
 

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const menuItem = {
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

    const modifySession = await axiosSecure.put(`/upSession/${_id}`, menuItem);
    if (modifySession.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `form update successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <div>
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
                defaultValue={loadedData.title}
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
                  defaultValue={loadedData.tutorName}
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
                  defaultValue={loadedData.tutorEmail}
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
                  defaultValue={loadedData.registrationStart}
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
                  defaultValue={loadedData.registrationEnd}
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
                  defaultValue={loadedData.classStart}
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
                  defaultValue={loadedData.classEnd}
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
                defaultValue={loadedData.price}
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
                defaultValue={loadedData.description}
                placeholder="description"
              ></textarea>
            </label>
          </div>

          <button className="btn">Update Session</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateSession;
