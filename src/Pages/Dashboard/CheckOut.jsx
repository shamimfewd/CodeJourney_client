/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckOutForm.css";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { ImSpinner9 } from "react-icons/im";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOut = ({ item, closeModal }) => {
  const [clientSecret, setClientSecret] = useState();
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // fetch client secret
    if (item?.price && item?.price > 1) {
      getClientSecret({ price: item?.price });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item?.price]);

  // get client secret
  const getClientSecret = async (price) => {
    const { data } = await axiosSecure.post("/create-payment-intent", price);
  
    setClientSecret(data.clientSecret);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
      setProcessing(false);
      return;
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }

    // confirm payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
      setProcessing(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      // 1  create payment info obj
      const paymentInfo = {
        ...item,
        transactionId: paymentIntent.id,
        date: new Date(),
      };

      try {
        const { data } = await axiosSecure.post(
          "/purchaseSession",
          paymentInfo
        );
        console.log(data);
        closeModal();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "payment successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
      setProcessing(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="p-4">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex justify-between">

    
        <button
          className="btn text-white bg-[#1E90FF] "
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          {processing ? (
            <ImSpinner9 className="animate-spin m-auto" />
          ) : (
            `Pay $${item?.price}`
          )}
        </button>


        <button onClick={closeModal} className="btn bg-[#FF6347] text-white">Cancel</button>
        </div>
      </form>

      {cardError && <p className="text-red-700">{cardError}</p>}
    </>
  );
};

export default CheckOut;
