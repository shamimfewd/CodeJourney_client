import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

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

const ApplyAgain = ({
  modalIsOpen,
  item,
  closeModal,
  openModal,
  afterOpenModal,
}) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    reset();
    const sessionItem = {
      title: data.title,
      tutorName: data.tutorName,
      tutorEmail: data.tutorEmail,
      registrationStart: new Date(data.registrationStart),
      registrationEnd: new Date(data.registrationEnd),
      description: data.description,
      classStart: data.classStart,
      classEnd: data.classEnd,
      price: parseInt(data.price),
      status: "Pending",
    };

    const tutorSession = await axiosSecure.post("/applyAgain", sessionItem);

    if (tutorSession.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Apply successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/mySessions");
    }
  };

  return (
    <div>
      <div className="overflow-y-scroll">
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
            <div>Upload Your Materials</div>
            <form onSubmit={handleSubmit(onSubmit)} className="overflow-auto">
              <div>
                <label className="form-control w-full MY-6">
                  <div className="label">
                    <span className="label-text">
                      Session Title{""}
                      <span className="text-orange-600">*</span>
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="session title"
                    {...register("title", { required: true })}
                    defaultValue={item.title}
                    className="input input-bordered w-full "
                  />
                </label>
              </div>

              <div className="flex items-center gap-x-4">
                <div className="w-full">
                  <label className="form-control w-full MY-6">
                    <div className="label">
                      <span className="label-text">
                        Tutor Name{""}
                        <span className="text-orange-600">*</span>
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="tutor name"
                      {...register("tutorName", { required: true })}
                      defaultValue={user.displayName}
                      className="input input-bordered w-full "
                    />
                  </label>
                </div>

                <div className="w-full">
                  <label className="form-control w-full MY-6">
                    <div className="label">
                      <span className="label-text">
                        Tutor Email{""}
                        <span className="text-orange-600">*</span>
                      </span>
                    </div>
                    <input
                      type="email"
                      placeholder="tutor email"
                      {...register("tutorEmail", { required: true })}
                      defaultValue={user.email}
                      className="input input-bordered w-full "
                    />
                  </label>
                </div>
              </div>

              <div className="flex items-center gap-x-4">
                <div className="w-full">
                  <label className="form-control w-full MY-6">
                    <div className="label">
                      <span className="label-text">
                        Registration Start{""}
                        <span className="text-orange-600">*</span>
                      </span>
                    </div>
                    <input
                      type="date"
                      {...register("registrationStart", { required: true })}
                      placeholder="session start"
                      defaultValue={item.registrationStart}
                      className="input input-bordered w-full "
                    />
                  </label>
                </div>
                <div className="w-full">
                  <label className="form-control w-full MY-6">
                    <div className="label">
                      <span className="label-text">
                        Registration End{""}
                        <span className="text-orange-600">*</span>
                      </span>
                    </div>
                    <input
                      type="date"
                      {...register("registrationEnd", { required: true })}
                      placeholder="session end"
                      defaultValue={item.registrationEnd}
                      className="input input-bordered w-full "
                    />
                  </label>
                </div>
              </div>

              <div className="flex items-center gap-x-4">
                <div className="w-full">
                  <label className="form-control w-full MY-6">
                    <div className="label">
                      <span className="label-text">
                        Class Start{""}
                        <span className="text-orange-600">*</span>
                      </span>
                    </div>
                    <input
                      type="time"
                      {...register("classStart", { required: true })}
                      placeholder="session start"
                      defaultValue={item.classStart}
                      className="input input-bordered w-full "
                    />
                  </label>
                </div>
                <div className="w-full">
                  <label className="form-control w-full MY-6">
                    <div className="label">
                      <span className="label-text">
                        Class End{""}
                        <span className="text-orange-600">*</span>
                      </span>
                    </div>
                    <input
                      type="time"
                      {...register("classEnd", { required: true })}
                      placeholder="session end"
                      defaultValue={item.classEnd}
                      className="input input-bordered w-full "
                    />
                  </label>
                </div>
              </div>
              <div className="w-full">
                <label className="form-control w-full MY-6">
                  <div className="label">
                    <span className="label-text">
                      Price{""}
                      <span className="text-orange-600">*</span>
                    </span>
                  </div>

                  <input
                    type="number"
                    {...register("price", { required: true })}
                    placeholder="Price"
                    defaultValue={item.price}
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
              <div>
                <label className="form-control">
                  <div className="label">
                    <span className="label-text">
                      Session Description{""}
                      <span className="text-orange-600">*</span>
                    </span>
                  </div>
                  <textarea
                    {...register("description", { required: true })}
                    className="textarea textarea-bordered h-24"
                    placeholder="description"
                    defaultValue={item.description}
                  ></textarea>
                </label>
              </div>

              <button className="btn">Add Session</button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ApplyAgain;
