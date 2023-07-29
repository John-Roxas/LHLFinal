const StripeCheckoutComponent = () => {
  // Replace 'pk_test_XXXXXXXXXXXXXXXXXXXXXXXX' with your Stripe publishable key
  const stripePublishableKey = 'pk_test_XXXXXXXXXXXXXXXXXXXXXXXX';

  const handleToken = (token) => {
    // Send the token to your backend for further processing
    console.log('Stripe token:', token);
  };

  return (
    <div>
      <h2>Stripe Checkout</h2>
      <StripeCheckout
        token={handleToken}
        stripeKey={stripePublishableKey}
        name="DashDine"
        // description="Purchase Description"
        amount={1000} // Amount in cents (e.g., $10 => 1000 cents)
        currency="CAD"
        // image="https://your-company-logo-url.png" // Replace with your company logo URL
        billingAddress={true}
        shippingAddress={true}
      >
        <button>Pay with Card</button>
      </StripeCheckout>
    </div>
  );
};

export default StripeCheckoutComponent;