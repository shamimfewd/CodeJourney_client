import { NavLink, Outlet } from "react-router-dom";
import { GoSidebarCollapse } from "react-icons/go";
import useAdmin from "../../Hooks/useAdmin";
import useTutor from "../../Hooks/useTutor";
import { FaBook, FaHome, FaList, FaUsers } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isTutor] = useTutor();

  const activeLink = ["bg-[#FF6347]", "text-white"];
  const normalLink = "";

  const getNavLinks = () => {
    if (isAdmin) {
      return (
        <>
          <li>
            <NavLink
              to={"/dashboard/allUser"}
              style={{ fontSize: "17px" }}
              className={({ isActive }) =>
                isActive ? activeLink.join(" ") : normalLink
              }
            >
              <FaUsers /> View All Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/allSession"}
              style={{ fontSize: "17px" }}
              className={({ isActive }) =>
                isActive ? activeLink.join(" ") : normalLink
              }
            >
              <FaBook /> View All Study Sessions
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/allMaterials"}
              style={{ fontSize: "17px" }}
              className={({ isActive }) =>
                isActive ? activeLink.join(" ") : normalLink
              }
            >
              <FaList /> View All Materials
            </NavLink>
          </li>
        </>
      );
    } else if (isTutor) {
      return (
        <>
          <li>
            <NavLink
              to={"/dashboard/createSession"}
              style={{ fontSize: "17px" }}
              className={({ isActive }) =>
                isActive ? activeLink.join(" ") : normalLink
              }
            >
              Create Session
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/mySessions"}
              style={{ fontSize: "17px" }}
              className={({ isActive }) =>
                isActive ? activeLink.join(" ") : normalLink
              }
            >
              My Sessions
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/dashboard/approvedSession"}
              style={{ fontSize: "17px" }}
              className={({ isActive }) =>
                isActive ? activeLink.join(" ") : normalLink
              }
            >
              Upload Materials
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/myMaterials"}
              style={{ fontSize: "17px" }}
              className={({ isActive }) =>
                isActive ? activeLink.join(" ") : normalLink
              }
            >
              My Materials
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/viewAllNotes"}
              style={{ fontSize: "17px" }}
              className={({ isActive }) =>
                isActive ? activeLink.join(" ") : normalLink
              }
            >
              View All Notes
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <div className="">
              <Helmet>
        <title>CodeJourney - Dashboard</title>
      </Helmet>
          <li>
            <NavLink
              to={"/dashboard/bookedSession"}
              style={{ fontSize: "17px" }}
              className={({ isActive }) =>
                isActive ? activeLink.join(" ") : normalLink
              }
            >
              Booked Session
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/createNote"}
              style={{ fontSize: "17px" }}
              className={({ isActive }) =>
                isActive ? activeLink.join(" ") : normalLink
              }
            >
              Create Note
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/manageNote"}
              style={{ fontSize: "17px" }}
              className={({ isActive }) =>
                isActive ? activeLink.join(" ") : normalLink
              }
            >
              Manage Personal Note
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/allMaterials"}
              style={{ fontSize: "17px" }}
              className={({ isActive }) =>
                isActive ? activeLink.join(" ") : normalLink
              }
            >
              All Materials
            </NavLink>
          </li>
        </div>
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
              <NavLink to={"/"}>
                <FaHome /> Home
              </NavLink>
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
