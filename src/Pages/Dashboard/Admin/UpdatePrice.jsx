import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import SectionTitle from "../../../Shired/SectionTitle";
import { useQuery } from "@tanstack/react-query";



const UpdatePrice = () => {
  const axiosSecure = useAxiosSecure();
  const loadedData = useLoaderData();
  const { _id } = loadedData;
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();



  // const { data: priceUp = [], refetch } = useQuery({
  //   queryKey: ["priceUp"],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get(`/updatePrice/${_id}`);
  //     return res.data;
  //   },
  // });




  const onSubmit = async (data) => {
    const sessionItem = {
      price: data.price,
    };

    const sessionPrice = await axiosSecure.patch(
      `/updatePrice/${_id}`,
      sessionItem
    );
    console.log(sessionPrice.data);
    if (sessionPrice.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Updated Price Successfully `,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard/allSession");
    }

   
  };
  return (
    <div className="mt-10">
      <SectionTitle heading={"Add Price"} />
      <form onSubmit={handleSubmit(onSubmit)} className="mx-10">
        <div className="w-full">
          <label className="form-control w-full MY-6">
            <div className="label">
              <span className="label-text">
                Session Price{""}
                <span className="text-orange-600">*</span>
              </span>
            </div>
            <input
              type="text"
              placeholder="price"
              {...register("price", { required: true })}
              defaultValue={""}
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <br />
        <button className="btn bg-[#1E90FF] text-white">Add Price</button>
      </form>
    </div>
  );
};

export default UpdatePrice;
