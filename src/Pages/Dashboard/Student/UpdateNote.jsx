import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const UpdateNote = () => {

  const axiosSecure = useAxiosSecure();

  const loadedData = useLoaderData();
  const { _id } = loadedData;
 

  const { register, handleSubmit } = useForm();


  const onSubmit = async (data) => {
    const noteItem = {
      title: data.title,
      studentEmail: data.studentEmail,
      description: data.description,
    };

    const studentNote = await axiosSecure.put(`/upNote/${_id}`, noteItem);
    console.log(studentNote.data);
    if (studentNote.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Updated Note Successfully `,
        showConfirmButton: false,
        timer: 1500,
      });
    }

    console.log(data);
  };
  return (
    <div>
            <Helmet>
        <title>CodeJourney - Dashboard/Update Note</title>
      </Helmet>
      <h1>update page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="form-control w-full MY-6">
            <div className="label">
              <span className="label-text">
                Note Title{""}
                <span className="text-orange-600">*</span>
              </span>
            </div>
            <input
              type="text"
              placeholder="note title"
              {...register("title", { required: true })}
              defaultValue={loadedData.title}
              className="input input-bordered w-full "
            />
          </label>
        </div>

        <div className="w-full">
          <label className="form-control w-full MY-6">
            <div className="label">
              <span className="label-text">
                Student Email{""}
                <span className="text-orange-600">*</span>
              </span>
            </div>
            <input
              type="email"
              placeholder="tutor email"
              {...register("studentEmail", { required: true })}
              defaultValue={loadedData.studentEmail}
              className="input input-bordered w-full "
            />
          </label>
        </div>

        <div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">
                Note Description{""}
                <span className="text-orange-600">*</span>
              </span>
            </div>
            <textarea
              {...register("description", { required: true })}
              defaultValue={loadedData.description}
              className="textarea textarea-bordered h-24"
              placeholder="description"
            ></textarea>
          </label>
        </div>

        <button className="btn">Add Note</button>
      </form>
    </div>
  );
};

export default UpdateNote;
