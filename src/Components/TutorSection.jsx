import { useEffect, useState } from "react";
import SectionTitle from "../Shired/SectionTitle";

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
        <SectionTitle heading={"Our Tutors"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tutors.map((tutor) => (
          <div
            key={tutor.id}
            className="w-full max-w-xs overflow-hidden text-center mx-auto   dark:bg-gray-800"
          >
            <img
              className="object-cover  h-80 w-60 rounded-2xl mx-auto"
              src={tutor.image}
              alt="avatar"
            />

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
