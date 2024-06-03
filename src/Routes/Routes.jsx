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
        loader: ()=> fetch('http://localhost:5000/session')
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

      // tutor routes

      {
        path: "tutorHome",
        element: <TutorHome />,
      },
      {
        path: "createSession",
        element: <CreateSession />,
      },
    ],
  },
]);

export default router;
