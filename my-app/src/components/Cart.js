import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./Cart.css";
import "./StripeCheckoutModal.css";
import StripePaymentForm from "./StripePaymentForm";
import StripeCheckout from "react-stripe-checkout";
import useEmail from "../hooks/useEmail";

const ShoppingCart = (props) => {
  const [customerData, setCustomerData] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [cartData, setCartData] = useState([]); // Store cart items fetched from the backend
  const [recentOrder, setRecentOrder] = useState([]);

  const { emailOrderData } = useEmail();

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

  // console.log("CUSTOMER ID IN FRONTEND IS ", id);

  const customerID = id; // Replace with the actual customer ID (you can pass it as a prop or fetch it from the logged-in state)
  const stripeRef = useRef(null);
  let restaurantName;
  // Need to take this from the order table
  if (cartData.length === 0) {
    restaurantName = null;
  } else {
    restaurantName = cartData[0].restaurant_name;
  }

  console.log("CART DATA HERE");
  console.log(cartData);

  // calculate subtotal. Separate hook?
  const subtotal = cartData.reduce(
    (total, item) => total + item.food_items_price * item.food_items_quantity,
    0
  );
  const taxRate = 0.1; // 10% tax rate
  const tax = subtotal * taxRate;
  const deliveryFee = 3.99;

  const totalAmount = subtotal + tax + deliveryFee;

  const orderTotal = {
    subtotal: subtotal,
    tax: tax,
    deliveryFee: deliveryFee,
    totalAmount: totalAmount,
  };

  const handleDeleteCartItem = async (cartItemId) => {
    try {
      const response = await axios.delete(`/api/deleteCartItem/${cartItemId}`);
      // After successfully deleting the item, update the cartData state to reflect the change
      setCartData(cartData.filter((item) => item.cart_item_id !== cartItemId));
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  const handlePaymentSuccess = async (paymentIntent) => {
    try {
      // Handle the payment success here.
      // console.log("Payment succeeded! Payment Intent:", paymentIntent);
      // console.log("TONY ADD EMAIL FUNCTIONALITY HERE!");
      // Call the backend API to create an order and update the cart status
      const response = await axios.post("/api/addOrder", {
        cartId: cartData[0].cartid, // Assuming cartData is an array of cart items fetched from the backend, and we use the first cart item for simplicity
        customerId: id,
        totalAmount: totalAmount.toFixed(2),
      });

      // console.log(cartId);

      setRecentOrder(cartData);

      // console.log(response.data);
      // Clear the cartData state after successful payment
      emailOrderData(cartData, orderTotal);
      setCartData([]);
    } catch (error) {
      console.error("Error creating order and updating cart status:", error);
    }
  };

  // MONITOR cookie session

  // Fetch the customer's data and cart items from the backend server using axios
  useEffect(() => {
    axios
      .get(`/api/customers/${id}`)
      .then((response) => setCustomerData(response.data))
      .catch((error) => console.error("Error fetching customer data:", error));

    axios
      .get(`/api/findCart/${id}`)
      .then((response) => {
        // Assuming the backend returns an array of cart items, set the cartData state accordingly
        setCartData(response.data);
      })
      .catch((error) => console.error("Error fetching cart data:", error));
  }, [id]);

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

      {cartData.length === 0 ? ( // Check if the cart is empty
        <div className="cart-item">
          <p>Your cart is empty. Go and grab something delicious!</p>
        </div>
      ) : (
        <div className="cart-item">
          <ul className="cart-list">
            {cartData.map((item, index) => (
              <li key={index} className="cart-list-item">
                <div className="cart-list-item-left">
                  <p className="cart-list-item-left-qty">
                    {item.food_items_quantity}×
                  </p>
                  <p className="cart-list-item-left-name">{item.food_name}</p>
                </div>
                <div className="cart-list-item-right">
                  <p className="cart-list-item-right-total">
                    $
                    {(item.food_items_price * item.food_items_quantity).toFixed(
                      2
                    )}
                  </p>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteCartItem(item.cart_item_id)} // Call the delete function with the item's ID
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {cartData.length > 0 && ( // Show the cart cost details only if the cart is not empty
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
            <div className="cart-cost-line">
              <div className="cart-cost-left">
                <p>Order Total:</p>
              </div>
              <div className="cart-cost-right">
                <p>${totalAmount.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {cartData.length > 0 && ( // Show the StripePaymentForm only if the cart is not empty
        <StripePaymentForm
          totalAmount={totalAmount}
          onPaymentSuccess={handlePaymentSuccess}
        />
      )}
    </article>
  );
};

export default ShoppingCart;
