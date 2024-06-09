import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import BookedSession from "../Pages/Dashboard/Student/BookedSession";
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
import MySession from "../Pages/Dashboard/Tutor/MySession";
import UpdateSession from "../Pages/Dashboard/Admin/UpdateSession";
import AdminRoute from "./AdminRoute";
import UpdateNote from "../Pages/Dashboard/Student/UpdateNote";
import ApprovedSession from "../Pages/Dashboard/Tutor/ApprovedSession";
import MyMaterials from "../Pages/Dashboard/Tutor/MyMaterials";
import EditMaterial from "../Pages/Dashboard/Tutor/EditMaterial";
import ViewAllNotes from "../Pages/Dashboard/Tutor/ViewAllNotes";
import BookingPage from "../Pages/BookingPage";
import BookedDetails from "../Pages/Dashboard/Student/BookedDetails";
import AllMaterials from "../Pages/Dashboard/Student/AllMaterials";
import Payment from "../Pages/Dashboard/Payment";

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
        path: "/bookingPage/:id",
        element: <BookingPage />,
        loader: () => fetch("http://localhost:5000/session"),
      },
      {
        path: "/details/:id",
        element: <SessionDetails />,
        loader: () => fetch("http://localhost:5000/sessionDetails"),
      },
      {
        path: "/bookedDetails/:id",
        element: <BookedDetails />,
        loader: () => fetch("http://localhost:5000/bookedDetail"),
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
        element: <AllMaterials />,
      },
      {
        path: "updateNote/:id",
        element: <UpdateNote />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/upNote/${params.id}`),
      },
      {
        path: "payment",
        element: <Payment />,
      },

      // admin routes

      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "allUser",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "updateRole/:id",
        element: (
          <AdminRoute>
            <UpdateRole />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users/${params.id}`),
      },

      {
        path: "allSession",
        element: (
          <AdminRoute>
            <AllSession />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/session/${params.id}`),
      },

      {
        path: "updateSession/:id",
        element: (
          <AdminRoute>
            <UpdateSession />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/upSession/${params.id}`),
      },
      // {
      //   path: "priceUpdateModal/:id",
      //   element: <ModalCom />,
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
        path: "mySessions",
        element: <MySession />,
      },

      {
        path: "approvedSession",
        element: <ApprovedSession />,
      },
      {
        path: "myMaterials",
        element: <MyMaterials />,
      },
      {
        path: "updateMaterial/:id",
        element: <EditMaterial />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/upMaterial/${params.id}`),
      },

      {
        path: "viewAllNotes",
        element: <ViewAllNotes />,
      },
    ],
  },
]);

export default router;
