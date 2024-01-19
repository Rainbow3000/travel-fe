import React,{useState} from 'react'
import {PayPalButtons} from '@paypal/react-paypal-js'
const PaypalCheckoutButton = () => {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  // creates a paypal order
  const createOrder = (data, actions) => {
      return actions.order.create({
          purchase_units: [
              {
                  description: "Sunflower",
                  amount: {
                      currency_code: "USD",
                      value: 20,
                  },
              },
          ],
      }).then((orderID) => {
              setOrderID(orderID);
              return orderID;
          });
  };

  // check Approval
  const onApprove = (data, actions) => {
      return actions.order.capture().then(function (details) {
          const { payer } = details;
          setSuccess(true);
      });
  };
  return (
    <PayPalButtons  
    style={{ layout: "vertical" }}
    createOrder={createOrder}
    onApprove={onApprove}/>
  )
}

export default PaypalCheckoutButton