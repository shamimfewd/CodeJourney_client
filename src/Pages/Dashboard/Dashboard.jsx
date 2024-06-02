import {  NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="drawer lg:drawer-open w-64">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4  w-50 min-h-screen bg-base-200 text-base-content">
            {/* Sidebar content here */}
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
              <NavLink to={"/dashboard/ManageNote"}>Manage Personal Note</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/AllMaterials"}>All Materials</NavLink>
            </li>

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
