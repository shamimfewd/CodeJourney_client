import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const { createUser, updateUserProfile, setUser, user } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // image upload to imgbb and then get an url
    // const imageFile = { photo: data.photo[0] };
    const formData = new FormData();
    formData.append("image", data.photo[0]);
    console.log(formData);

    // imageFile
    const res = await axiosPublic.post(image_hosting_api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        // "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const imageUrl = res.data.data.url;
      createUser(data.email, data.password)
        .then((result) => {
          console.log(result.user);

          // update user profile
          updateUserProfile(data.name, imageUrl)
            .then(() => {
              // setUser({ ...user, photoURL: imageUrl, displayName: data.name });

              // create user entry in the database
              const userInfo = {
                name: data.name,
                email: data.email,
                role: data.role,
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
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
              <option value={"student"}>Student</option>
              <option value={"tutor"}>Tutor</option>
              <option value={"admin"}>Admin</option>
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

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Photo</span>
            </div>
            <input
              type="file"
              {...register("photo", { required: true })}
              className="file-input w-full max-w-xs my-6"
            />
            {errors.photo && (
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
