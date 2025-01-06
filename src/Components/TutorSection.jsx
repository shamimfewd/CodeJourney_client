import { useEffect, useState } from "react";
import SectionTitle from "../Shired/SectionTitle";
import { FaFacebook } from "react-icons/fa6";

const TutorSection = () => {
  const [tutors, setTutors] = useState([]);
  useEffect(() => {
    fetch("/tutorProfile.json")
      .then((res) => res.json())
      .then((data) => setTutors(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-24">
      <div className="text-center mb-10">
        <SectionTitle
          heading={"Expert Instructors"}
          subHeading={"Instructors"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tutors.map((tutor) => (
          <div
            key={tutor.id}
            className="w-full bg-[#1e8fff0f] max-w-xs rounded-sm overflow-hidden text-center mx-auto p-1   dark:bg-gray-800"
          >
            <img
              className="object-cover   h-80 w-100 rounded-sm mx-auto"
              src={tutor.image}
              alt="avatar"
            />
            <div className=" flex gap-2 justify-center -mt-6 z-50">
              <FaFacebook className="text-4xl cursor-pointer bg-white p-1 rounded-sm text-[#0861F2]" />
              <FaFacebook className="text-4xl cursor-pointer bg-white p-1 rounded-sm text-[#0861F2]" />
              <FaFacebook className="text-4xl cursor-pointer bg-white p-1 rounded-sm text-[#0861F2]" />
              <FaFacebook className="text-4xl cursor-pointer bg-white p-1 rounded-sm text-[#0861F2]" />
            </div>
            <div className="py-5 text-center ">
              <span className="font-bold">{tutor.name}</span>
              <br />
              <span className="text-sm text-gray-700 dark:text-gray-200">
                {tutor.work}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorSection;
