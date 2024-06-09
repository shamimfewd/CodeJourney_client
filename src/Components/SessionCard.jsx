import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
<FaStar />;
const SessionCard = ({ card }) => {
  const {
    _id,
    title,
    price,
    classEnd,
    description,
    classStart,
    registrationEnd,
    registrationStart,
    status,
    tutorEmail,
    tutorName,
  } = card;

  const currentDate = new Date();
  const regiStart = new Date(registrationStart);
  const regiEnd = new Date(registrationEnd);

  const isRegistrationOpen = currentDate >= regiStart && currentDate <= regiEnd;

  return (
    <div>
      <div className="  bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className=" p-4 md:p-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            {title}
          </h3>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {description.slice(0, 30)}...
          </p>

          <div className="flex mt-2 item-center">
            <FaStar className="text-orange-400" />
            <FaStar className="text-orange-400" />
            <FaStar className="text-orange-400" />
            <FaStar />
            <FaStar />
          </div>

          <div
            className="flex justify-between items-center
           mt-3 "
          >
            <h4 className="text-lg font-bold mr-2 text-gray-700 dark:text-gray-200 md:text-xl">
              ${price}
            </h4>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "500px",
              }}
              className=" items-center w-full"
            >
              <div>
                {isRegistrationOpen ? (
                  <span className="  text-xs p-2 rounded-full text-[#1E90FF] uppercase transition-colors duration-300 transform bg-[#1e8fff45] ">
                    On Going
                  </span>
                ) : (
                  <span className=" hover:none   text-[#FF6347] uppercase p-2 rounded-full transition-colors duration-300 transform bg-[#ff63474e]    ">
                    Closed
                  </span>
                )}
              </div>
              <div>
                <Link to={`/details/${_id}`}>
                  <button className="btn text-xs font-bold text-white uppercase bg-[#1E90FF] btn-md ">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
