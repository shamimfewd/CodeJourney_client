import useAuth from "../../../Hooks/useAuth";

const TutorHome = () => {
  const { user } = useAuth();
  return (
    <div>
      tutor home
      <h2 className="text-6xl">
        {user?.displayName ? user.displayName : "hi welcome back"}
      </h2>
    </div>
  );
};

export default TutorHome;
