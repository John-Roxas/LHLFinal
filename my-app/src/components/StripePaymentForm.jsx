import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import StripeCheckout from "react-stripe-checkout";

const StripePaymentForm = ({ totalAmount, onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setLoading] = useState(false);

  const handleToken = async (token) => {
    // You can handle the token here, but since we're not making an actual API call
    // we can simply proceed with the payment success simulation.
    setLoading(true);

    // Simulate a payment intent (for test purposes)
    const mockPaymentIntent = {
      id: "mock_payment_intent_id",
      amount: totalAmount * 100, // Amount in cents
      currency: "CAD",
      status: "succeeded",
      // ... other payment intent details
    };

    // Simulate a successful payment after a short delay (for test purposes)
    setTimeout(() => {
      setLoading(false);
      onPaymentSuccess(mockPaymentIntent);
    }, 2000); // Simulate a 2-second processing time
  };

  return (
    <>
      <CardElement options={{ style: { base: { fontSize: "16px" } } }} />

      <StripeCheckout
        token={handleToken}
        stripeKey="pk_test_51NOYLPKNHM092Bt6x5egM24zoVt8DopST0EvM6ogZGUXoFqkWVeaT7NUyZpEbekNx7r3BDOyGo5b2Y0h0S9rR1oO00zYlQSqnc" 
        name="DashDine"
        amount={totalAmount * 100} // Amount in cents (e.g., $10 => 1000 cents)
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
