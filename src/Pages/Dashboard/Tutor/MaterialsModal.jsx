import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

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

const MaterialsModal = ({
  modalIsOpen,
  closeModal,
  afterOpenModal,
  openModal,
  item,
}) => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  Modal.setAppElement("#root");

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      reset();
      const materialsItem = {
        title: data.title,
        tutorEmail: data.tutorEmail,
        sessionId: data.sessionId,
        link: data.link,
        image: res.data.data.display_url,
      };

      const tutorMaterials = await axiosSecure.post(
        "/materials",
        materialsItem
      );

      if (tutorMaterials.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Materials Added Successfully `,
          showConfirmButton: false,
          timer: 1500,
        });
      }
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
            <div>Upload Your Materials</div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="form-control w-full MY-6">
                  <div className="label">
                    <span className="label-text">
                      Material Title{""}
                      <span className="text-orange-600">*</span>
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="note title"
                    {...register("title", { required: true })}
                    defaultValue={item.title}
                    className="input input-bordered w-full "
                  />
                </label>
              </div>

              <div>
                <label className="form-control w-full MY-6">
                  <div className="label">
                    <span className="label-text">
                      Session Id{""}
                      <span className="text-orange-600">*</span>
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Session Id"
                    {...register("sessionId", { required: true })}
                    defaultValue={item._id}
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

              <div className="w-full">
                <label className="form-control w-full MY-6">
                  <div className="label">
                    <span className="label-text">
                      Drive Link{""}
                      <span className="text-orange-600">*</span>
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Drive Link"
                    {...register("link", { required: true })}
                    className="input input-bordered w-full "
                  />
                </label>
              </div>

              <div>
                <input
                  type="file"
                  {...register("image", { required: true })}
                  className="file-input w-full max-w-xs my-6"
                />
              </div>

              <button className="btn">Add Materials</button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default MaterialsModal;
