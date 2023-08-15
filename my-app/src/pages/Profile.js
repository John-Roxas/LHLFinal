import React, { useState, useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import useOrderHistory from "../hooks/useOrderHistory";

function Profile(props) {
  const { orderHistory } = props;

  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("session")
  );

  //Destructure useOrderHistory hook
  const { getOrderHistoryData } = useOrderHistory();

  useEffect(() => {
    const sessionData = sessionStorage.getItem("session");
    setIsLoggedIn(sessionData);
    if (isLoggedIn) {
      getOrderHistoryData(props.customerInfo.id)
        .then((data) => {
          console.log("from useEffect data orderHistory", data);
          props.setOrderHistory(data); // Update the order history state
        })
        .catch((error) => {
          console.log("Error fetching order history:", error);
        });
    }
  }, []);

  function getSessionData() {
    const sessionDataString = sessionStorage.getItem("session");
    console.log("From chromeDOM", sessionDataString);
    if (sessionDataString) {
      //converts the session cookie back to an object
      console.log(
        "turning string back into object in profile",
        JSON.parse(sessionDataString)
      );
    } else {
      return null;
    }
  }

  if (!isLoggedIn) {
    return (
      <>
        <div className="App">
          <div className="profile-container">
            <div className="tile-item">
              <p>Please login to view the profile.</p>
            </div>
          </div>
        </div>
        <NavigationBar />
      </>
    );
  }

  const handleLogout = () => {
    sessionStorage.removeItem("session");
    document.cookie =
      "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
  };

  const {
    id,
    customer_name,
    customer_email,
    customer_street_address,
    city,
    postal_code,
    phone,
    customer_avatar,
  } = props.customerInfo;
  return (
    <div className="App">
      <div className="profile-container">
        <div className="tile-item img">
          <img src={customer_avatar} alt="Avatar" />
        </div>
        <h1 className="tile-item">{customer_name}</h1>
        <div className="tile-item">Email: {customer_email}</div>
        <div className="tile-item">
          Address: {`${customer_street_address}, ${city}, ${postal_code}`}
        </div>
        <div className="tile-item">Phone Number: {phone}</div>
        <button className="login-button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="tile-item">{getSessionData()}</div>

      <div>
        <ul className="order-container">
          <h2>Order History</h2>
          {orderHistory.map((order, index) => (
            <li key={index} className="order-info">
              <div className="vert-align">
                <p>Order Number: {order.order_id}</p>
                <p>Restaurant: {order.restaurant_name}</p>
                <p>Order Total: {order.total_amount}</p>
              </div>
              <img
                src={order.restaurant_picture}
                alt={order.restaurant_name}
                className="restaurant-picture crop"
              />
            </li>
          ))}
        </ul>
      </div>
      <NavigationBar />
    </div>
  );
}

export default Profile;
