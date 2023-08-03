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

  const {
    customer_name,
    id,
    customer_email,
    customer_street_address,
    city,
    postal_code,
    phone,
    customer_avatar,
  } = props.customerInfo;

  const customerID = id; // Replace with the actual customer ID (you can pass it as a prop or fetch it from the logged-in state)
  const stripeRef = useRef(null);

  // Need to take this from the order table
  const restaurantName = "Delicious Restaurant";

  // calculate subtotal. Separate hook?
  const subtotal = cartData.reduce(
    (total, item) => total + item.food_items_price * item.food_items_quantity,
    0
  );
  const taxRate = 0.1; // 10% tax rate
  const tax = subtotal * taxRate;
  const deliveryFee = 3.99;

  const totalAmount = subtotal + tax + deliveryFee;

  const handlePaymentSuccess = async (paymentIntent) => {
  try {
    // Handle the payment success here.
    console.log("Payment succeeded! Payment Intent:", paymentIntent);
    console.log("TONY ADD EMAIL FUNCTIONALITY HERE!");

    // Call the backend API to create an order and update the cart status
    const response = await axios.post("/api/createOrder", {
      cartId: cartData[0].id, // Assuming cartData is an array of cart items fetched from the backend, and we use the first cart item for simplicity
      customerId: customerID,
    });

    console.log(response.data);
  } catch (error) {
    console.error("Error creating order and updating cart status:", error);
  }
};

  // Fetch the customer's data and cart items from the backend server using axios
  useEffect(() => {
    axios
      .get(`/api/customers/${customerID}`)
      .then((response) => setCustomerData(response.data))
      .catch((error) => console.error("Error fetching customer data:", error));

    axios
      .get(`/api/findCart?customerId=${customerID}`)
      .then((response) => {
        // Assuming the backend returns an array of cart items, set the cartData state accordingly
        setCartData(response.data);
      })
      .catch((error) => console.error("Error fetching cart data:", error));
  }, [customerID]);

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
        <p>{customer_street_address}</p>
      </div>

      <div className="cart-item">
        <p>{restaurantName}</p>
      </div>

      <div className="cart-item">
        <ul className="cart-list">
          {cartData.map((item, index) => (
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
      <StripePaymentForm totalAmount={totalAmount} onPaymentSuccess={handlePaymentSuccess} />
    </article>
  );
};

export default ShoppingCart;
