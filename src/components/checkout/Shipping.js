import React, { useState } from "react";

import Button from "../ui/Button";
import { loadStripe } from "@stripe/stripe-js";
import {
  AddressElement,
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

function ShippingForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [orderShipping, setOrderShipping] = useState();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (elements == null) return;

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url:
          "https://marfatumbleweed.com/confirm?session_id={CHECKOUT_SESSION_ID}",
      },
    });
  };

  const getShipping = (event) => {
    if (event.complete) {
      // Extract potentially complete address
      setOrderShipping(event.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <AddressElement options={{ mode: "shipping" }} onChange={getShipping} />
      <div style={{ margin: "40px 0" }}>
        <PaymentElement />
      </div>
      <Button disabled={!stripe || !elements} label="Continue" />
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
}

function Shipping({ api_key, clientSecret }) {
  const stripePromise = loadStripe(api_key);

  const appearance = {
    clientSecret,
    appearance: {
      theme: "flat",
      variables: {
        fontFamily: "Gotham, system-ui, sans-serif",
        borderRadius: "0px",
      },
    },
  };

  return (
    <Elements stripe={stripePromise} options={appearance}>
      <div style={{ margin: "40px 0 0px" }}>
        <ShippingForm />
      </div>
    </Elements>
  );
}
export default Shipping;
