import { Link } from "react-router-dom";

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
      <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="w-2/3 p-4 md:p-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            {title}
          </h3>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>

          <div className="flex mt-2 item-center">
            <svg
              className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg
              className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg
              className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg
              className="w-5 h-5 text-gray-500 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg
              className="w-5 h-5 text-gray-500 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
          </div>

          <div className="flex justify-between mt-3 ">
            <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
              $220
            </h1>

            {isRegistrationOpen ? (
              <button className="btn text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded ">
                On Going
              </button>
            ) : (
              <button className="btn hover:none font-bold text-white uppercase transition-colors duration-300 transform bg-red-600 rounded   ">
                Closed
              </button>
            )}

            <Link to={`/details/${_id}`}>
              <button className="btn text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
