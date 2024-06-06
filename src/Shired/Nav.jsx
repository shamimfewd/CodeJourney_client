import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Nav = () => {
  const { user, logOut } = useAuth();

  // log out
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const navOption = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </li>
      )}

      {/* <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li> */}
      {!user && (
        <li>
          <NavLink to={"/register"}>Register</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
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
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <img className="w-10 h-10" src={user.photoURL} alt="" />
              <button onClick={handleLogOut} className="btn">
                log out
              </button>
              {user.status}
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="btn">login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
