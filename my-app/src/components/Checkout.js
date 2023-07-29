import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './StripeCheckoutModal.css'; // Import your custom CSS for the modal

const StripeCheckoutComponent = ({ onClose }) => {
  // Same code as before...

  const handleToken = (token) => {
    // Send the token to your backend for further processing
    console.log('Stripe token:', token);
    onClose(); // Close the modal after processing the token
  };

  return (
    <div className="stripe-modal">
      <div className="stripe-modal-content">
        <h2>Stripe Checkout</h2>
        <StripeCheckout
          token={handleToken}
          // stripeKey={stripePublishableKey}
          name="DashDine"
          amount={1000} // NEED TO PASS THIS FROM THE CART
          currency="CAD"
          billingAddress={true}
          shippingAddress={true}
        >
          <button className="pay-button">Pay with Card</button>
        </StripeCheckout>
      </div>
    </div>
  );
};

export default StripeCheckoutComponent;
