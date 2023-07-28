import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";
// new comment

const ShoppingCart = (props) => {
  const [customerData, setCustomerData] = useState(null);
  const customerID = 1; // Replace with the actual customer ID (you can pass it as a prop or fetch it from the logged-in state)
  console.log("RECEIVED A CART");
  console.log(props.cart);

  // Need to take this from the order table
  const restaurantName = "Delicious Restaurant";

  // Need to replace with API call to the orders table
  // const orderDetails = [
  //   { itemName: "Item 1", quantity: 2, price: 5.99 },
  //   { itemName: "Item 2", quantity: 1, price: 3.49 },
  // ];

  // calculate subtotal. Separate hook?
  let order = props.cart;
  console.log("CALCULATING SUBTOTAL");
  console.log(order);
  const subtotal = order.reduce(
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
                  <p className="cart-list-item-left-qty">{item.quantity}×</p><p className="cart-list-item-left-name"> {item.foodName}</p>
                </div>
                <div className="cart-list-item-right">
                  <p className="cart-list-item-right-total">${(item.price*item.quantity).toFixed(2)}</p>
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
      <button className="btn">PLACE ORDER</button>
    </article>
  );
};

export default ShoppingCart;
