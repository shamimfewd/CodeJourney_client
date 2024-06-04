import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import AllProduct from "../Pages/Dashboard/AllProduct";
import BookedSession from "../Pages/Dashboard/Student/BookedSession";
// import CreateSession from "../Pages/Dashboard/Student/CreateSession";
import StudentHome from "../Pages/Dashboard/Student/StudentHome";
import CreateNote from "../Pages/Dashboard/Student/CreateNote";
import ManageNote from "../Pages/Dashboard/Student/ManageNote";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import TutorHome from "../Pages/Dashboard/Tutor/TutorHome";
import CreateSession from "../Pages/Dashboard/Tutor/CreateSession";
import SessionDetails from "../Pages/SessionDetails";

import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import UpdateRole from "../Pages/Dashboard/Admin/UpdateRole";
import AllSession from "../Pages/Dashboard/Admin/AllSession";
import TutorSection from "../Pages/Dashboard/TutorSection";
import SessionStatusUp from "../Components/SessionStatusUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <SessionDetails />,
        loader: () => fetch("http://localhost:5000/session"),
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  // dashboard route
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "studentHome",
        element: <StudentHome />,
      },
      {
        path: "bookedSession",
        element: <BookedSession />,
      },
      {
        path: "createNote",
        element: <CreateNote />,
      },
      {
        path: "manageNote",
        element: <ManageNote />,
      },
      {
        path: "allMaterials",
        element: <AllProduct />,
      },

      // admin routes

      {
        path: "adminHome",
        element: <AdminHome />,
      },
      {
        path: "allUser",
        element: <AllUsers />,
      },
      {
        path: "updateRole/:id",
        element: <UpdateRole />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users/${params.id}`),
      },

      {
        path: "allSession",
        element: <AllSession />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/session/${params.id}`),
      },
      // {
      //   path: "sessionStatusUpdate/:id",
      //   element: <SessionStatusUp />,
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:5000/session/${params.id}`),
      // },

      // tutor routes

      {
        path: "tutorHome",
        element: <TutorHome />,
      },
      {
        path: "createSession",
        element: <CreateSession />,
      },
      {
        path: "tutorSession",
        element: <TutorSection />,
      },
    ],
  },
]);

export default router;
