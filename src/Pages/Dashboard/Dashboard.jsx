import { Link, NavLink, Outlet } from "react-router-dom";
import { GoSidebarCollapse } from "react-icons/go";
import useAdmin from "../../Hooks/useAdmin";
import useTutor from "../../Hooks/useTutor";
import { FaBook, FaList, FaUsers } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { IoNotifications } from "react-icons/io5";
import { BsSave } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { GrInstall } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isTutor] = useTutor();

  const activeLink = ["text-[#1E90FF]"];
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
              <FaBook /> View All Sessions
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
              to={"/dashboard/notification"}
              style={{ fontSize: "17px" }}
              className={({ isActive }) =>
                isActive ? activeLink.join(" ") : normalLink
              }
            >
              <IoNotifications /> Notification
            </NavLink>
          </li>
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
              <BsSave className="text-xl" /> Booked Session
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
              <IoCreateOutline className="text-2xl" /> Create Note
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
              <FaRegEdit className="text-xl" /> Manage Note
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
              <GrInstall className="text-2xl" /> All Materials
            </NavLink>
          </li>
        </div>
      );
    }
  };

  return (
    <div className="flex">
      <div className="drawer lg:drawer-open w-64 ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center bg-[#fff]">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
            <GoSidebarCollapse className="text-4xl" />
          </label>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-50 min-h-screen bg-[#1e8fff2a] ">
            {/* Sidebar content here */}
            <Link to={"/"} className="text-[#1E90FF] text-3xl font-bold">
              <span className="text-gray-800 font-bold">Code</span>Journey
            </Link>

            <br />
            {getNavLinks()}

            <div className="divider"></div>
            <li>
              <NavLink to={"/"} className="text-[17px]">
                <IoHomeOutline className="text-2xl" /> Home
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
