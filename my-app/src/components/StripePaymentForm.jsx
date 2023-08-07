import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import StripeCheckout from "react-stripe-checkout";

const StripePaymentForm = ({ totalAmount, onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setLoading] = useState(false);
  const handleToken = async (token) => {
    setLoading(true);

    const mockPaymentIntent = {
      id: "mock_payment_intent_id",
      amount: totalAmount * 100,
      currency: "CAD",
      status: "succeeded",
    };

    setTimeout(() => {
      setLoading(false);
      onPaymentSuccess(mockPaymentIntent);
    }, 2000);
  };

  const stripeKey = process.env.REACT_APP_STRIPE_API_KEY; // Access the environment variable

  return (
    <>
      <CardElement options={{ style: { base: { fontSize: "16px" } } }} />

      <StripeCheckout
        token={handleToken}
        stripeKey={stripeKey}
        name="DashDine"
        amount={totalAmount * 100}
        currency="CAD"
        image="https://your-company-logo-url.png"
        billingAddress={true}
        shippingAddress={true}
        disabled={!stripe || isLoading}
      />
    </>
  );
};

export default StripePaymentForm;
