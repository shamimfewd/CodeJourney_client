import useAuth from "../../../Hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div>
      admin home
      <h2 className="text-6xl">
        {user?.displayName ? user.displayName : "hi welcome back"}
      </h2>
    </div>
  );
};

export default AdminHome;
