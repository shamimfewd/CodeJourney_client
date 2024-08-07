import { MdSupportAgent } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";
import { TbMoneybag } from "react-icons/tb";
import { MdOutlineWorkOutline } from "react-icons/md";



const Support = () => {
  return (
    <div className="bg-[#1E90FF]">
      <div className="max-w-7xl mx-auto mt-24 bg-[#1E90FF]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          <div className="text-center mx-auto text-[#ffffffe1]">
            <MdSupportAgent className="text-6xl  text-center mx-auto" />

            <h5 className="text-2xl">Support System</h5>
          </div>
          <div className="text-center mx-auto text-[#ffffffe1]">
            <TbMoneybag className="text-6xl  text-center mx-auto" />

            <h5 className="text-2xl">Refund System</h5>
          </div>
          <div className="text-center mx-auto text-[#ffffffe1]">
            <PiCertificateBold className="text-6xl  text-center mx-auto" />

            <h5 className="text-2xl">Earn Certificate</h5>
          </div>
          <div className="text-center mx-auto text-[#ffffffe1]">
            <MdOutlineWorkOutline className="text-6xl  text-center mx-auto" />

            <h5 className="text-2xl">Get a Job</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
