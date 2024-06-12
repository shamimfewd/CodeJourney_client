/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const FeedBack = ({
  afterOpenModal,
  openModal,
  closeModal,
  modalIsOpen,
  item,
}) => {
  const axiosSecure = useAxiosSecure();
  Modal.setAppElement("#root");
console.log(item.tutorEmail);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const rejectionItem = {
      reason: data.reason,
      feedback: data.feedback,
      tutorEmail: item.tutorEmail,
    };

    const feedbackTutor = await axiosSecure.post(
      "/rejectionFeedBack",
      rejectionItem
    );

    if (feedbackTutor.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Sent Feedback Successfully `,
        showConfirmButton: false,
        timer: 1500,
      });
      closeModal();
    }
  };
  return (
    <div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button
            className="hover:text-red-500 p-1 absolute right-0 top-0 rounded-full w-10 h-10  "
            onClick={closeModal}
          >
            <AiOutlineClose className="text-2xl text-center" />
          </button>

          <div className="mt-10">
            <div>Send Your Feedback</div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full">
                <label className="form-control w-full MY-6">
                  <div className="label">
                    <span className="label-text">Reason{""}</span>
                  </div>
                  <input
                    type="text"
                    placeholder="reason"
                    {...register("reason", { required: true })}
                    className="input input-bordered w-full "
                  />
                </label>
              </div>

              <div className="w-full">
                <label className="form-control w-full MY-6">
                  <div className="label">
                    <span className="label-text">Feedback{""}</span>
                  </div>

                  <textarea
                    name=""
                    placeholder="feedback"
                    {...register("feedback", { required: true })}
                    id=""
                    cols="30"
                    rows="10"
                    className="border rounded-lg p-2"
                  ></textarea>
                </label>
              </div>

              <br />

              <button className="btn btn text-white bg-[#1E90FF]">
                Send Feedback
              </button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default FeedBack;
