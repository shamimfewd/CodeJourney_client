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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
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
    ],
  },
]);

export default router;
