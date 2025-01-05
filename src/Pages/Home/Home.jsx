import TutorSection from "../../Components/TutorSection";
import Banner from "./Banner";
import StudySession from "./StudySession";
import { Helmet } from "react-helmet";
import Support from "./Support";
import AboutUs from "./AboutUs";

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
    </div>
  );
};

export default Home;
