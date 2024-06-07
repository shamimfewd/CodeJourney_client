import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import useSessionCard from "../../../Hooks/useSessionCard";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UploadMatirials = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const sessionCard = useSessionCard();
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
      console.log(tutorMaterials.data);
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

    console.log(data);
  };
  return (
    <div>
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
              defaultValue={sessionCard._id}
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
  );
};

export default UploadMatirials;
