import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { logInUser, GoogleLogIn, GigHubLogIn } = useAuth();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

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
      .then(() => {
        // if (result.user) {
        //   toast.success("Login Successfully");
        //   navigate(location?.state || "/");
        // }
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubLogIn = () => {
    GigHubLogIn()
      .then(() => {
        // if (result.user) {
        //   toast.success("Login Successfully");
        //   navigate(location?.state || "/");
        // }
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h1>login</h1>
      <div className="flex justify-center items-center h-[100vh]">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
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

            <button className="btn w-full">login</button>
          </form>
          <div>
            <button className="btn" onClick={handleGoogleLogIn}>
              google
            </button>
            <button className="btn" onClick={handleGithubLogIn}>
              Gighub
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
