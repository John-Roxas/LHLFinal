// import React, { useState } from "react";
// import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

// const StripePaymentForm = ({ totalAmount, onPaymentSuccess }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [isLoading, setLoading] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);

//     // Simulate a payment intent (for test purposes)
//     const mockPaymentIntent = {
//       id: "mock_payment_intent_id",
//       amount: totalAmount * 100, // Amount in cents
//       currency: "CAD",
//       status: "succeeded",
//       // ... other payment intent details
//     };

//     // Simulate a successful payment after a short delay (for test purposes)
//     setTimeout(() => {
//       setLoading(false);
//       onPaymentSuccess(mockPaymentIntent);
//     }, 2000); // Simulate a 2-second processing time
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div style={{ maxWidth: "300px", margin: "0 auto" }}>
//         <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
//       </div>
//       <button type="submit" disabled={!stripe || isLoading}>
//         {isLoading ? "Processing..." : "Pay with Card"}
//       </button>
//     </form>
//   );
// };

// export default StripePaymentForm;
