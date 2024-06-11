import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const { createUser, updateUserProfile, user, setUser, loading } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [showPass, setShowPass] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  const onSubmit = async (data) => {
    // image upload to imgbb and then get an url
   
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

  const handleClick = () => {
    setShowPass(!showPass);
  };

  if (user || loading) return;
  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <div className="p-6 rounded-xl shadow-2xl ">
          <h3 className="text-3xl mb-6 font-bold text-gray-700">
            Registration
          </h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form-control  w-full ">
              <div className="label">
                <span className="label-text text-lg">Name</span>
              </div>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered w-full "
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </label>

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-lg">Email</span>
              </div>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered w-full "
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </label>

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-lg">Select Option</span>
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

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-lg">Password</span>
              </div>
              <div className="relative">
                <input
                  type={showPass ? "password" : "text"}
                  placeholder="********"
                  className="input input-bordered w-full "
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*[0-9]))(?=(.*[!@#$%^&*()\-__+.]){1,})/,
                  })}
                />

                <span
                  onClick={handleClick}
                  className="absolute cursor-pointer right-4 top-3"
                >
                  {showPass ? (
                    <FaEyeSlash className="text-3xl" />
                  ) : (
                    <FaEye className="text-3xl" />
                  )}
                </span>
              </div>

              {errors.password && (
                <span className="text-red-600">This field is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-600">
                  Password Must be 6 Characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-600">
                  Password maximum 20 Characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-600 w-1/3">
                  Password Must have one number and one lowercase and one
                  uppercase and one special character
                </span>
              )}
            </label>

            <label className="form-control w-full ">
              <div className="label -mb-4">
                <span className="label-text text-lg">Photo</span>
              </div>
              <input
                type="file"
                {...register("photo", { required: true })}
                className="file-input w-full  my-6 file-input-info  "
              />
              {errors.photo && (
                <span className="text-red-600">This field is required</span>
              )}
            </label>

            <button className="btn w-full bg-[#1E90FF] text-lg text-white">
              Register
            </button>
          </form>
          <p className="my-2">
            if you have an account. Please go to{" "}
            <Link to={"/login"} className="text-blue-600">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
