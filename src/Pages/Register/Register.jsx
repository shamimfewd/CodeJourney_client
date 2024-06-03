import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from 'sweetalert2'

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        // update user profile
        updateUserProfile(data.name, data.photo)
          .then(() => {
            // create user entry in the database
            const userInfo = {
              name: data.name,
              email: data.email,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                reset();
                Swal.fire({
                  title: "User Created Successfully",
                  showClass: {
                    popup: `
                      animate__animated
                      animate__fadeInUp
                      animate__faster
                    `,
                  },
                  hideClass: {
                    popup: `
                      animate__animated
                      animate__fadeOutDown
                      animate__faster
                    `,
                  },
                });
                navigate("/");
              }
            });
          })
          .catch((error) => {
            console.log(error);
          });
        // /--------
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h1>register</h1>
      <div className="flex justify-center items-center h-[100vh]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-600">This field is required</span>
            )}
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-600">This field is required</span>
            )}
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Select Option</span>
            </div>
            <select
              {...register("role", { required: true })}
              defaultValue={"default"}
              className="select select-bordered"
            >
              <option value={"default"} disabled>
                Register as a
              </option>
              <option value={"Student"}>Student</option>
              <option value={"Tutor"}>Tutor</option>
              <option value={"Admin"}>Admin</option>
            </select>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              placeholder="********"
              className="input input-bordered w-full max-w-xs"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-600">This field is required</span>
            )}
          </label>

          <button className="btn w-full">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
