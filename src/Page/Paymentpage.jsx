import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const Paymentpage = ({ totalpaymentprice }) => {
  const [orderID, setOrderID] = useState(null);
  const [isPaid, setIsPaid] = useState(false);

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: totalpaymentprice ? totalpaymentprice : "10",
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(() => {
      setIsPaid(true);
    });
  };

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AQQmQ3NXAGg2URXaJm25BbadQM7-kXhr6-lfBLTXSJk2D0vL_DOFyfvaGIhWrTkifBg_72ntZLH2XMxu",
      }}
    >
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
        style={{ layout: "horizontal" }} 
      />
      {isPaid && (
        <button mt={4} colorScheme="green">
          Payment successful
        </button>
      )}
    </PayPalScriptProvider>
  );
};

export default Paymentpage;