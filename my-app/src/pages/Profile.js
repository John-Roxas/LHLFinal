import React, { useState, useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import axios from "axios";
// import useOrderHistory from "../hooks/useOrderHistory";

function Profile(props) {
  const { orderHistory } = props;
  //Order History hook
  // const { getOrderHistoryData } = useOrderHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("session")
  );
  // const [orderHistory, setOrderHistory] = useState([]); // State to hold order history data

  useEffect(() => {
    const sessionData = sessionStorage.getItem("session");
    setIsLoggedIn(sessionData);

    // Fetch order history data when the component mounts
    // if (isLoggedIn) {
    //   getOrderHistoryData(props.customerInfo.id)
    //     .then((data) => {
    //       setOrderHistory(data); // Update the order history state
    //     })
    //     .catch((error) => {
    //       console.log("Error fetching order history:", error);
    //     });
    // }
    // [isLoggedIn, props.customerInfo.id]
  }, []);
  // useEffect(() => {
  //   const sessionData = sessionStorage.getItem("session");
  //   setIsLoggedIn(!!sessionData);
  // }, []);

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
            <div className="tile-item">Please login to view the profile.</div>
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
        <div className="tile-item">
          <img src={customer_avatar} alt="Avatar" />
        </div>
        <div className="tile-item">Name: {customer_name}</div>
        <div className="tile-item">Email: {customer_email}</div>
        <div className="tile-item">
          Address: {`${customer_street_address}, ${city}, ${postal_code}`}
        </div>
        <div className="tile-item">Phone Number: {phone}</div>
        <div className="tile-item">This is the {id}</div>

        <div className="tile-item">{getSessionData()}</div>
        <div className="tile-item">
          <h2>Order History</h2>
          <ul>
            {orderHistory.map((order, index) => (
              <li key={index} className="item-list">
                <p>Order ID: {order.order_id}</p>
                <p>Restaurant: {order.restaurant_name}</p>
                <p>Order Total: {order.total_amount}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="tile-item">
          <button className="login-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <NavigationBar />
    </div>
  );
}

export default Profile;
