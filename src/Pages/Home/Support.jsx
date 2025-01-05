import { MdSupportAgent } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";
import { TbMoneybag } from "react-icons/tb";
import { MdOutlineWorkOutline } from "react-icons/md";

const Support = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          <div className="text-center mx-auto text-gray-700 bg-[#1e8fff1c] hover:bg-[#1E90FF] hover:text-white  transition-all  p-5 m-4 rounded-md">
            <MdSupportAgent className="text-6xl  text-center mx-auto" />
            <h5 className="text-xl mb-2 mt-2">Support System</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eos
              perspiciatis eius est distinctio odit!
            </p>
          </div>
          <div className="text-center mx-auto text-gray-700 bg-[#1e8fff1c] hover:bg-[#1E90FF] hover:text-white  transition-all  p-5 m-4 rounded-md">
            <TbMoneybag className="text-6xl  text-center mx-auto" />
            <h5 className="text-xl  mb-2 mt-2">Refund System</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eos
              perspiciatis eius est distinctio odit!
            </p>
          </div>
          <div className="text-center mx-auto  text-gray-700 bg-[#1e8fff1c] hover:bg-[#1E90FF] hover:text-white  transition-all  p-5 m-4 rounded-md">
            <PiCertificateBold className="text-6xl  text-center mx-auto" />
            <h5 className="text-xl mb-2 mt-2">Earn Certificate</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eos
              perspiciatis eius est distinctio odit!
            </p>
          </div>
          <div className="text-center mx-auto text-gray-700 bg-[#1e8fff1c] hover:bg-[#1E90FF] hover:text-white  transition-all  p-5 m-4 rounded-sm">
            <MdOutlineWorkOutline className="text-6xl  text-center mx-auto" />
            <h5 className="text-xl mb-2 mt-2">Get a Job {"  "} </h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eos
              perspiciatis eius est distinctio odit!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
