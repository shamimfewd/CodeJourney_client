import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { MdLogin } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";
import useAdmin from "../Hooks/useAdmin";
import useTutor from "../Hooks/useTutor";

const Nav = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const [isTutor] = useTutor();

  // log out
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const activeLink = ["bg-[#FF6347]", "text-white"];
  const normalLink = "";

  const navOption = (
    <>
      <li>
        <NavLink
          to={"/"}
          style={{ fontSize: "20px" }}
          className={({ isActive }) =>
            isActive ? activeLink.join(" ") : normalLink
          }
        >
          Home
        </NavLink>
      </li>

      {/* {user &&
        (isAdmin ? (
          <li>
            <NavLink
              to={"/dashboard/allUser"}
              style={{ fontSize: "20px" }}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Dashboard a
            </NavLink>
          </li>
        ) : user && isTutor ? (
          <li>
            <NavLink
              to={"/dashboard/createSession"}
              style={{ fontSize: "20px" }}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Dashboard t
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink
              to={"/dashboard/bookedSession"}
              style={{ fontSize: "20px" }}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Dashboard s
            </NavLink>
          </li>
        ))} */}

      {/* {user && isTutor && (
        <li>
          <NavLink
            to={"/dashboard/createSession"}
            style={{ fontSize: "20px" }}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Dashboard t
          </NavLink>
        </li>
      )} */}

      {user && (
        <li>
          <NavLink
            to={"/dashboard"}
            style={{ fontSize: "20px" }}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Dashboard
          </NavLink>
        </li>
      )}

      {!user && (
        <li>
          <NavLink
            to={"/register"}
            style={{ fontSize: "20px", listStyle: "none" }}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Register
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="">
      <div className="navbar py-4 pl-10 shadow-2xl   bg-base-100">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>

          <Link to={"/"} className="text-[#1E90FF] text-2xl font-bold">
            <span className="text-[#FF6347]">Code</span>Journey
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="navbar-end pr-10 ">
          {user ? (
            <>
              <div
                className="tooltip tooltip-bottom mr-2"
                data-tip={user.displayName}
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
              </div>

              <button
                onClick={handleLogOut}
                className="btn text-lg text-white bg-[#FF6347]"
              >
                <CgLogOut /> Log Out
              </button>
              {user.status}
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="btn text-white bg-[#1E90FF] text-lg">
                  <MdLogin /> Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
