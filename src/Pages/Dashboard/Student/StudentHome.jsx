import useAuth from "../../../Hooks/useAuth";

const StudentHome = () => {
  const { user } = useAuth();
  return (
    <div>
      studenthome
      <h2 className="text-6xl">
        {user?.displayName ? user.displayName : "hi welcome back"}
      </h2>
    </div>
  );
};

export default StudentHome;