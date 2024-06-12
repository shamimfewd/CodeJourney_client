import TutorSection from "../../Components/TutorSection";
import Banner from "./Banner";
import StudySession from "./StudySession";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>CodeJourney - Home</title>
      </Helmet>
      <Banner />
      <StudySession />
      <TutorSection />
    </div>
  );
};

export default Home;
