import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";
Modal.setAppElement("#root");

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

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

const Payment = ({
  modalIsOpen,
  closeModal,
  afterOpenModal,
  openModal,
  item,
}) => {
  return (
    <div className="w-10/12">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="h-[] w-[400px]">
          <button
            className="hover:text-red-500 p-1 absolute right-0 top-0 rounded-full w-10 h-10"
            onClick={closeModal}
          >
        
            <AiOutlineClose className="text-2xl text-center" />
          </button>
          <div className="">
            <Elements stripe={stripePromise}>
              <CheckOut item={item} closeModal={closeModal} />
            </Elements>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Payment;
