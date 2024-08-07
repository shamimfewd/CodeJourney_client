import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { MdLogin } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";
// import useAdmin from "../Hooks/useAdmin";
// import useTutor from "../Hooks/useTutor";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  const { user, logOut } = useAuth();
  // const [isAdmin] = useAdmin();
  // const [isTutor] = useTutor();

  // log out
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const activeLink = ["text-[#1E90FF]"];
  const normalLink = "";

  const navOption = (
    <>
      <li>
        <NavLink
          to={"/"}
          style={{ fontSize: "18px" }}
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
            style={{ fontSize: "18px" }}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Dashboard
          </NavLink>
        </li>
      )}

      {/* {!user && (
        <li>
          <NavLink
            to={"/register"}
            style={{ fontSize: "18px", listStyle: "none" }}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Register
          </NavLink>
        </li>
      )} */}
    </>
  );
  return (
    <div className="">
      <div className="navbar py-4 pl-10 shadow-sm   bg-base-100">
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

          <Link
            to={"/"}
            className="text-[#1E90FF] text-2xl md:text-3xl lg:text-3xl font-bold"
          >
            <span className="text-gray-800 font-bold">Code</span>Journey
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="navbar-end  pr-2 lg:pr-10 ">
          {/* {user ? (
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
                className="btn  text-red-600 bg-[#ff634784]"
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
          )} */}

          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn rounded-full bg-white hover:bg-white border-[#1E90FF] hover:border-[#1E90FF]  hover:border "
              >
                <div className="flex justify-between gap-4 items-center">
                  {user && (
                    <RxHamburgerMenu className="text-2xl text-[#1E90FF]" />
                  )}
                  <div className="w-10 rounded-full">
                    {user && (
                      <>
                        <div>
                          <img
                            className="rounded-full"
                            src={user.photoURL}
                            alt=""
                          />
                        </div>
                        {user.status}
                      </>
                    )}
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={handleLogOut} className="btn  text-red-600">
                    <CgLogOut className="text-lg" /> Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <div className="flex border justify-between gap-4 items-center rounded-full bg-white hover:bg-white p-2 border-[#1E90FF] hover:border-[#1E90FF]  hover:border ">
                <li className="list-none">
                  <NavLink
                    to={"/register"}
                    style={{
                      fontSize: "18px",
                      listStyle: "none",
                      color: "#1E90FF",
                    }}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    Register
                  </NavLink>
                </li>
                <div className="divider lg:divider-horizontal"></div>
                <Link to={"/login"}>
                  {/* <MdLogin className="text-2xl text-[#1E90FF]" /> */}
                  <span className="w-10 rounded-full text-[#1E90FF] text-lg">
                    Login
                  </span>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
