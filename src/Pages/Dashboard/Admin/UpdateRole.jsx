import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";


const UpdateRole = () => {
  const data = useLoaderData();
  const [updaterole, setUpdateRol] = useState(data);
  const { _id } = updaterole;

  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const roleStatue = {
      role: data.role,
    };

    await axiosSecure.patch(`/users/${_id}`, roleStatue).then((res) => {
      if (res.data.modifiedCount > 0) {
        // show success popup
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Updated",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Select Option</span>
          </div>
          <select
            {...register("role", { required: true })}
            defaultValue={"default"}
            className="select select-bordered"
          >
            <option value={setUpdateRol} disabled>
              Register as a
            </option>
            <option value={"student"}>Student</option>
            <option value={"tutor"}>Tutor</option>
            <option value={"admin"}>Admin</option>
          </select>
        </label>

        <button className="btn">update</button>
      </form>
    </div>
  );
};

export default UpdateRole;
