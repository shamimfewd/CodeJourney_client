import { Outlet } from "react-router-dom";
import Footer from "../Shired/Footer";
import Nav from "../Shired/Nav";
import Headroom from "react-headroom";

const Main = () => {
  return (
    <div>
      <Headroom>
        <Nav />
      </Headroom>

      <Outlet />

      <Footer />
    </div>
  );
};

export default Main;
