import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaGithub } from "react-icons/fa";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { logInUser, GoogleLogIn, GigHubLogIn } = useAuth();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [showPass, setShowPass] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    logInUser(email, password)
      .then(() => {
        // toast.success("login successfully");
        // navigate(location?.state || "/");

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogIn = () => {
    GoogleLogIn()
      .then((result) => {
        // if (result.user) {
        //   toast.success("Login Successfully");
        //   navigate(location?.state || "/");
        // }

        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubLogIn = () => {
    GigHubLogIn()
      .then((result) => {
        // if (result.user) {
        //   toast.success("Login Successfully");
        //   navigate(location?.state || "/");
        // }
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = () => {
    setShowPass(!showPass);
  };

  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <div className=" p-6 rounded-xl shadow-2xl ">
          <h3 className="text-3xl mb-6 font-bold text-gray-700">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-lg">Email</span>
              </div>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered w-full"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </label>

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-lg">Password</span>
              </div>
              <div className="relative">
                <input
                  type={showPass ? "password" : "text"}
                  placeholder="********"
                  className="input input-bordered w-full"
                  {...register("password", { required: true })}
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
            </label>
            <br />
            <button className="btn w-full bg-[#1E90FF] text-lg text-white">
              Login
            </button>
          </form>
          <p className="border-b mt-2 border-gray-300">
            if you don not have an account. Please go to{" "}
            <Link to={"/register"} className="text-blue-600">
              Register
            </Link>
          </p>
          <div className="divider">Or</div>
          <div className="space-y-2">
            <button className="btn w-full text-lg" onClick={handleGoogleLogIn}>
              <FcGoogle className="text-2xl" />
              Login With Google
            </button>

            <button className="btn w-full text-lg" onClick={handleGithubLogIn}>
              <FaGithub />
              Login With Gighub
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
