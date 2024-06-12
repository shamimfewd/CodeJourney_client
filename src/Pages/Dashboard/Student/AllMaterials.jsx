// import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Shired/SectionTitle";
import { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const AllMaterials = () => {
  const axiosSecure = useAxiosSecure();
  const [materials, setMaterials] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure.get(
        `/materialsStu?page=${currentPage}&size=${itemsPerPage}`
      );
      setMaterials(data);
    };

    getData();
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axiosSecure.get(`/materialCount`);

      setCount(data.count);
    };

    getCount();
  }, []);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  const handlePaginationBtn = (value) => {
    setCurrentPage(value);
  };

  // const handleDownload = (image) => {
  //   const element = document.createElement("a");
  //   const file = new Blob([image], { type: "image/jpeg" });

  //   element.href = URL.createObjectURL(file);
  //   element.download = "image.jpg";
  //   document.body.appendChild(element);
  //   element.click();
  // };

  const handleDownload = async (imageUrl) => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    const element = document.createElement("a");
    const file = new Blob([blob], { type: blob.type });
    const extension = blob.type.split("/")[1];
    
    element.href = URL.createObjectURL(file);
    element.download = `image.${extension}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  return (
    <div>
      <Helmet>
        <title>CodeJourney - Dashboard/All Materials</title>
      </Helmet>
      <div className="pr-10">
        <SectionTitle heading={"All Materials"} />
        <h3 className="font-bold">Total Materials:{materials.length}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {materials.map((material) => (
            <div
              key={material._id}
              className="card card-compact  bg-base-100 shadow-xl"
            >
              <figure>
                <img src={material.image} alt="image" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{material.title}</h2>

                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleDownload(material.image)}
                    className="btn text-white bg-[#1E90FF] "
                  >
                    Download
                  </button>
                  <button className="btn text-white bg-[#1E90FF] ">
                    <a href={material.link}>Drive Link</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* pagination */}
        <div className="text-center my-10">
          <div>
            <button
              disabled={currentPage === 1}
              onClick={() => handlePaginationBtn(currentPage - 1)}
              className="btn m-1 bg-[#1E90FF] text-white"
            >
              <BsArrowLeft /> Prev
            </button>
            {pages.map((btnNum) => (
              <button
                onClick={() => handlePaginationBtn(btnNum)}
                key={btnNum}
                className={`btn m-1 hover:bg-[#1E90FF] hover:text-white ${
                  currentPage === btnNum ? "bg-[#1E90FF] text-white" : ""
                }`}
              >
                {btnNum}
              </button>
            ))}
            <button
              disabled={currentPage === numberOfPages}
              onClick={() => handlePaginationBtn(currentPage + 1)}
              className={`btn m-1 bg-[#1E90FF] text-white`}
            >
              Next <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMaterials;
