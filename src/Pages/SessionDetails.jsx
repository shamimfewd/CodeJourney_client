import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SessionDetails = () => {
  const loadedData = useLoaderData();
  const [sessionData, setSessionData] = useState(loadedData);
  console.log(sessionData);
  const { id } = useParams();

  const currentData = sessionData.find((item) => item._id === id);
  console.log(currentData);

  const {
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
  } = currentData;

  return (
    <div>
      <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            Mar 10, 2019
          </span>
        </div>

        <div className="mt-2">
          <h4 className="text-2xl">{title}</h4>

          <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button className="btn">readmon</button>
        </div>
      </div>
    </div>
  );
};

export default SessionDetails;
