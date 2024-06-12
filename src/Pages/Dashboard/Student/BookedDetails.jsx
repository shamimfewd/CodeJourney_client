// import moment from "moment-timezone";
// import { Link, useLoaderData, useParams } from "react-router-dom";
// import Review from "./Review";
// import ShowReview from "../../../Components/ShowReview";

// const BookedDetails = () => {
//   const loadedData = useLoaderData();
//   const { id } = useParams();
//   const currentData = loadedData.find((item) => item._id === id);

//   if (!currentData) {
//     return <div>Session not found</div>;
//   }

//   const {
//     _id,
//     title,
//     price,
//     classEnd,
//     description,
//     classStart,
//     registrationEnd,
//     registrationStart,
//     status,
//     tutorEmail,
//     tutorName,
//   } = currentData;

//   const convertToBST = (timeString) => {
//     return moment(timeString)
//       .tz("Asia/Dhaka")
//       .format("MMMM Do YYYY, h:mm:ss a z");
//   };

//   const currentDate = new Date();
//   const regiStart = new Date(registrationStart);
//   const regiEnd = new Date(registrationEnd);

//   const isRegistrationOpen = currentDate >= regiStart && currentDate <= regiEnd;

//   return (
//     <div>
//       <div className="">
//         <div className="max-w-7xl flex  mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
//           <div className="flex-1">
//             <img
//               className="object-cover w-full h-64"
//               src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
//               alt="Article"
//             />

//             <div className="p-6">
//               <div>
//                 <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
//                   Product
//                 </span>
//                 <h3 className="text-3xl">{title}</h3>
//                 <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
//                   {description}
//                 </p>
//                 <p>Registration Start: {convertToBST(registrationStart)}</p>
//                 <p>Registration End: {convertToBST(registrationEnd)}</p>
//                 <p>Class Start: {classStart}</p>
//                 <p>Class End: {classEnd}</p>
//                 <p>Registration Fee: ${price}</p>
//               </div>

//               <div className="mt-4">
//                 <div className="flex items-center">
//                   <div className="flex items-center">
//                     <img
//                       className="object-cover h-10 rounded-full"
//                       src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
//                       alt="Avatar"
//                     />
//                     <div>
//                       <p>{tutorName}</p>
//                       <p>{tutorEmail}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {isRegistrationOpen ? (
//                 <Link to={`/bookingPage/${_id}`}>
//                   <button className="btn">Book Now</button>
//                 </Link>
//               ) : (
//                 <button
//                   disabled
//                   className="btn hover:none  font-bold text-white uppercase transition-colors duration-300 transform bg-red-600 rounded   "
//                 >
//                   Closed
//                 </button>
//               )}
//             </div>
//           </div>
//           <div className="w-72">
//             <Review id={_id} />

//             <div>
//               <ShowReview />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookedDetails;
