import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";

import { useState } from "react";

const Review = ({ id }) => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const [rating, setRating] = useState(0);

  const onSubmit = async (data) => {
    reset();
    const reviewItem = {
      review: data.review,
      rating: rating,
      id: id,
    };

    const studentReview = await axiosSecure.post("/feedBack", reviewItem);
  
    if (studentReview.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Review Added Successfully `,
        showConfirmButton: false,
        timer: 1500,
      });
    }

   
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span className="rating-label">Get Feedback</span>
        <div>
          {[1, 2, 3, 4, 5].map((num, i) => (
            <button key={(num, i)} onClick={() => setRating(num)}>
              <span
                className={`text-3xl transition-all ${
                  num <= rating ? "text-orange-400" : ""
                }`}
              >
                &#9733;
              </span>
            </button>
          ))}
        </div>
        <div>
          <label className="form-control">
            <div className="label"></div>
            <textarea
              {...register("review", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="message"
            ></textarea>
          </label>
        </div>
<br />
        <button className="btn text-white bg-[#1E90FF]">Post</button>
      </form>
    </div>
  );
};

export default Review;
