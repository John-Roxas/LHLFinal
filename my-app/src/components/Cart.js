import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./Cart.css";
import "./StripeCheckoutModal.css";
import StripePaymentForm from "./StripePaymentForm";
import StripeCheckout from "react-stripe-checkout";

const ShoppingCart = (props) => {
  const [customerData, setCustomerData] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [cartData, setCartData] = useState([]); // Store cart items fetched from the backend
  console.log("CUSTOMER INFO");
  console.log(props.loginState);
  const customerID = 1; // Replace with the actual customer ID (you can pass it as a prop or fetch it from the logged-in state)
  const stripeRef = useRef(null);

  

  // Need to take this from the order table
  const restaurantName = "Delicious Restaurant";

  // Need to replace with API call to the orders table
  // const orderDetails = [
  //   { itemName: "Item 1", quantity: 2, price: 5.99 },
  //   { itemName: "Item 2", quantity: 1, price: 3.49 },
  // ];

  // calculate subtotal. Separate hook?
  let order = cartData;
  console.log("CALCULATING SUBTOTAL");
  console.log(order);
  const subtotal = order.reduce(
    (total, item) => total + item.food_items_price * item.food_items_quantity,
    0
  );
  const taxRate = 0.1; // 10% tax rate
  const tax = subtotal * taxRate;
  const deliveryFee = 3.99;

  const totalAmount = subtotal + tax + deliveryFee;

  const handlePaymentSuccess = (paymentIntent) => {
    // Handle the payment success here.
    console.log("Payment succeeded! Payment Intent:", paymentIntent);
  };

  // Fetch the customer's data from the back-end server using axios
  useEffect(() => {
    axios
      .get(`/api/customers/${customerID}`)
      .then((response) => setCustomerData(response.data))
      // .then((response) => console.log(response.data))
      .catch((error) => console.error("Error fetching customer data:", error));
     axios
      .get(`/api/findCart`) // Replace with the API endpoint to fetch cart items
      .then((response) => setCartData(response.data))
      .catch((error) => console.error("Error fetching cart data:", error));
  }, [customerID]);

  const handlePlaceOrder = () => {
    setShowCheckout(true);
  };

  // HAVEN'T WRITTEN THIS YET
  const handleToken = (token) => {
    // Send the token to your backend for further processing
    console.log("Stripe token:", token);
    setShowCheckout(false); // Close the modal after processing the token
  };

  return (
    <article className="cart-item">
      <div className="cart-item TOP">
        <h1>Your Cart</h1>
      </div>

      <div className="cart-item">
        <p>{customerData?.customer_street_address}</p>
      </div>

      <div className="cart-item">
        <p>{restaurantName}</p>
      </div>

      <div className="cart-item">
        <ul className="cart-list">
          {order.map((item, index) => (
            <li key={index} className="cart-list-item">
              <div className="cart-list-item-left">
                <p className="cart-list-item-left-qty">{item.food_items_quantity}×</p>
                <p className="cart-list-item-left-name"> {item.food_name}</p>
              </div>
              <div className="cart-list-item-right">
                <p className="cart-list-item-right-total">
                  ${(item.food_items_price * item.food_items_quantity).toFixed(2)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="cart-item">
        <div className="cart-cost-item">
          <div className="cart-cost-line">
            <div className="cart-cost-left">
              <p>Subtotal:</p>
            </div>
            <div className="cart-cost-right">
              <p>${subtotal.toFixed(2)}</p>
            </div>
          </div>
          <div className="cart-cost-line">
            <div className="cart-cost-left">
              <p>Tax:</p>
            </div>
            <div className="cart-cost-right">
              <p>${tax.toFixed(2)}</p>
            </div>
          </div>
          <div className="cart-cost-line">
            <div className="cart-cost-left">
              <p>Delivery Fee:</p>
            </div>
            <div className="cart-cost-right">
              <p>${deliveryFee.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-item">
        <div className="cart-cost-line">
          <div className="cart-cost-left">
            <h4>Total:</h4>
          </div>
          <div className="cart-cost-right">
            <h4>${totalAmount.toFixed(2)}</h4>
          </div>
        </div>
      </div>
      {/* <StripeCheckout
        token={handleToken}
        stripeKey={
          "pk_test_51NOYLPKNHM092Bt6x5egM24zoVt8DopST0EvM6ogZGUXoFqkWVeaT7NUyZpEbekNx7r3BDOyGo5b2Y0h0S9rR1oO00zYlQSqnc"
        }
        name="DashDine"
        amount={totalAmount * 100} // Amount in cents (e.g., $10 => 1000 cents)
        currency="CAD"
        image="https://your-company-logo-url.png" // Replace with your company logo URL
        billingAddress={true}
        shippingAddress={true}
        ref={stripeRef} // Set the ref for the StripeCheckout component
      /> */}

      <StripePaymentForm totalAmount={totalAmount} onPaymentSuccess={handlePaymentSuccess} />
    </article>
  );
};

export default ShoppingCart;
