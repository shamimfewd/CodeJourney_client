import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useTutor from "../Hooks/useTutor";

const TutorRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const [isTutor, isTutorLoading] = useTutor();

  if (loading || isTutorLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <span className="loading loading-infinity loading-4xl"></span>
      </div>
    );
  }

  if (user && isTutor) {
    return children;
  }

  return <Navigate to={"/"} state={{ from: location }} replace />;
};

export default TutorRoute;
