import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import BookedSession from "../Pages/Dashboard/Student/BookedSession";

import CreateNote from "../Pages/Dashboard/Student/CreateNote";
import ManageNote from "../Pages/Dashboard/Student/ManageNote";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";

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

import AllMaterials from "../Pages/Dashboard/Student/AllMaterials";
import Payment from "../Pages/Dashboard/Payment";
import TutorRoute from "./TutorRoute";
import UpdatePrice from "../Pages/Dashboard/Admin/UpdatePrice";
import ErrorPage from "../Components/ErrorPage";
import SingleBooked from "../Pages/Dashboard/Student/SingleBooked";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bookingPage/:id",
        element: (
          <PrivateRoute>
            <BookingPage />
          </PrivateRoute>
        ),
        loader: () => fetch("https://assignment12-server-inky.vercel.app/session"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <SessionDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("https://assignment12-server-inky.vercel.app/sessionDetails"),
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
          fetch(`https://assignment12-server-inky.vercel.app/upNote/${params.id}`),
      },
      {
        path: "payment",
        element: <Payment />,
      },

      {
        path: "singleBooked/:id",
        element: <SingleBooked />,
        loader: () => fetch(`https://assignment12-server-inky.vercel.app/bookedeStudent`),
      },

      // {
      //   path: "/bookedDetail/:id",
      //   element: <BookedDetails />,
      //   loader: () => fetch("https://assignment12-server-inky.vercel.app/bookedDetail"),
      // },

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
          fetch(`https://assignment12-server-inky.vercel.app/users/${params.id}`),
      },

      {
        path: "allSession",
        element: (
          <AdminRoute>
            <AllSession />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment12-server-inky.vercel.app/session/${params.id}`),
      },

      {
        path: "updateSession/:id",
        element: (
          <AdminRoute>
            <UpdateSession />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment12-server-inky.vercel.app/upSession/${params.id}`),
      },

      {
        path: "allMaterials",
        element: (
          <AdminRoute>
            <AllMaterials />
          </AdminRoute>
        ),
      },
      {
        path: "updatePrice/:id",
        element: (
          <AdminRoute>
            <UpdatePrice />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment12-server-inky.vercel.app/updatePrice/${params.id}`),
      },

      // tutor routes

      {
        path: "createSession",
        element: (
          <TutorRoute>
            <CreateSession />
          </TutorRoute>
        ),
      },

      {
        path: "mySessions",
        element: (
          <TutorRoute>
            <MySession />
          </TutorRoute>
        ),
      },

      {
        path: "approvedSession",
        element: (
          <TutorRoute>
            <ApprovedSession />
          </TutorRoute>
        ),
      },
      {
        path: "myMaterials",
        element: (
          <TutorRoute>
            <MyMaterials />
          </TutorRoute>
        ),
      },
      {
        path: "updateMaterial/:id",
        element: (
          <TutorRoute>
            <EditMaterial />
          </TutorRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment12-server-inky.vercel.app/upMaterial/${params.id}`),
      },

      {
        path: "viewAllNotes",
        element: <ViewAllNotes />,
      },
    ],
  },
]);

export default router;
