import { NavLink, Outlet } from "react-router-dom";
import { GoSidebarCollapse } from "react-icons/go";
import useAdmin from "../../Hooks/useAdmin";
import useTutor from "../../Hooks/useTutor";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isTutor] = useTutor();

  const getNavLinks = () => {
    if (isAdmin) {
      return (
        <>
          <li>
            <NavLink to={"/dashboard/adminHome"}>Admin Home</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/allUser"}>View All Users</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/allSession"}>
              View All Study Sessions
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/viewAllMaterials"}>
              View All Materials
            </NavLink>
          </li>
        </>
      );
    } else if (isTutor) {
      return (
        <>
          <li>
            <NavLink to={"/dashboard/tutorHome"}>Tutor Home</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/createSession"}>Create Session</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/mySessions"}>My Sessions</NavLink>
          </li>

          <li>
            <NavLink to={"/dashboard/approvedSession"}>
              Upload Materials
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/myMaterials"}>My Materials</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/viewAllNotes"}>View All Notes</NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <NavLink to={"/dashboard/studentHome"}>Student Home</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/bookedSession"}>Booked Session</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/createNote"}>Create Note</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/manageNote"}>Manage Personal Note</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/allMaterials"}>All Materials</NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <div className="flex">
      <div className="drawer lg:drawer-open w-64">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
            <GoSidebarCollapse className="text-4xl" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-50 min-h-screen bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {getNavLinks()}

            <div className="divider"></div>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
