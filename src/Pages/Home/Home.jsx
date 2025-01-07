import TutorSection from "../../Components/TutorSection";
import Banner from "./Banner";
import StudySession from "./StudySession";
import { Helmet } from "react-helmet";
import Support from "./Support";
import AboutUs from "./AboutUs";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>CodeJourney - Home</title>
      </Helmet>

      <Banner />
      <Support />
      <AboutUs />
      <StudySession />
      <TutorSection />
      <Testimonial />
    </div>
  );
};

export default Home;
