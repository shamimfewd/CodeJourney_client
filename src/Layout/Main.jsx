import { Outlet } from "react-router-dom";
import Footer from "../Shired/Footer";
import Nav from "../Shired/Nav";

const Main = () => {
  return (
    <div>
      <Nav />
      <Outlet />

      <Footer />
    </div>
  );
};

export default Main;
