import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import SectionTitle from "../../../Shired/SectionTitle";

const CreateNote = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    reset();
    const noteItem = {
      title: data.title,
      studentEmail: data.studentEmail,
      description: data.description,
    };

    const studentNote = await axiosSecure.post("/note", noteItem);
    // console.log(studentNote.data);
    if (studentNote.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Note Added Successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <div className="lg:mt-10 md:mt-6">
        <SectionTitle heading={"Create Note"} />
      </div>
      <form className="w-8/12 mx-auto space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
              defaultValue={user.email}
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
              className="textarea textarea-bordered h-24"
              placeholder="note description"
            ></textarea>
          </label>
        </div>
        <br />
        <button className="btn bg-[#1E90FF] hover:bg-[#1E90FF] rounded-sm text-white">
          Create Note
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
