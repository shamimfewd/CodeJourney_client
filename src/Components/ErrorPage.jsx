import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="text-center">
        <h2 className="text-4xl">Page not found</h2>
        <Link to={"/"}>
          <button className="btn bg-[#1E90FF]">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
