import { FaArrowRight } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="my-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div>
          <img
            className=" rounded-sm"
            src="https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div>
          <div className="aboutTitleBox">
            <h2 className=" aboutAfter aboutBefore text-2xl text-[#1E90FF]">
              About Us
            </h2>
          </div>
          <h3 className="text-4xl font-bold mb-5 mt-7">
            Welcome to Code Journey
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, omnis!
            Aspernatur nam nesciunt iure ad accusantium rem, placeat sit
          </p>
          <p className="mt-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            reiciendis quos aspernatur eum vel! Voluptate unde sequi, dolores
            illo aperiam, qui harum deserunt doloribus veniam officia nobis
            reiciendis. Iure, pariatur.
          </p>

          <div className="grid grid-cols-2 mt-8">
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <FaArrowRight className="text-[#1E90FF]" />{" "}
                <span>Skilled Instructors</span>
              </p>
              <p className="flex items-center gap-2">
                <FaArrowRight className="text-[#1E90FF]" />{" "}
                <span>Skilled Instructors</span>
              </p>
              <p className="flex items-center gap-2">
                <FaArrowRight className="text-[#1E90FF]" />{" "}
                <span>Skilled Instructors</span>
              </p>
            </div>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <FaArrowRight className="text-[#1E90FF]" />{" "}
                <span>Skilled Instructors</span>
              </p>
              <p className="flex items-center gap-2">
                <FaArrowRight className="text-[#1E90FF]" />{" "}
                <span>Skilled Instructors</span>
              </p>
              <p className="flex items-center gap-2">
                <FaArrowRight className="text-[#1E90FF]" />{" "}
                <span>Skilled Instructors</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
