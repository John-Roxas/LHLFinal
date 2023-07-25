import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";

const ShoppingCart = () => {
  const [customerData, setCustomerData] = useState(null);
  const customerID = 1; // Replace with the actual customer ID (you can pass it as a prop or fetch it from the logged-in state)

  // Need to take this from the order table
  const restaurantName = "Delicious Restaurant";

  // Need to replace with API call to the orders table
  const orderDetails = [
    { itemName: "Item 1", quantity: 2, price: 5.99 },
    { itemName: "Item 2", quantity: 1, price: 3.49 },
  ];

  // calculate subtotal. Separate hook?
  const subtotal = orderDetails.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const taxRate = 0.1; // 10% tax rate
  const tax = subtotal * taxRate;
  const deliveryFee = 3.99;

  const totalAmount = subtotal + tax + deliveryFee;

  // Fetch the customer's data from the back-end server using axios
  useEffect(() => {
    axios
      .get(`/api/customers/${customerID}`)
      .then((response) => setCustomerData(response.data))
      // .then((response) => console.log(response.data))
      .catch((error) => console.error("Error fetching customer data:", error));
  }, [customerID]);

  console.log(customerData);

  return (
    <div className="section">
      <h2>Your Cart</h2>

      <div>
        <h3>Delivery Address</h3>
        <p>{customerData?.customer_street_address}</p>
        <p></p>
      </div>

      <div className="section">
        <h3>Restaurant</h3>
        <p>{restaurantName}</p>
      </div>

      <div className="section">
        <h3>Order Details</h3>
        <ul>
          {orderDetails.map((item, index) => (
            <li key={index}>
              {item.itemName} x{item.quantity} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>Costs</h3>
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <p>Delivery Fee: ${deliveryFee.toFixed(2)}</p>
        <h4>Total: ${totalAmount.toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default ShoppingCart;
