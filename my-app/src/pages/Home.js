import SearchField from "../components/SearchField";
import NavigationBar from "../components/NavigationBar";
import RestaurantList from "../components/RestaurantList";
import Login from "../components/Login";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

function Index(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("session")
  );

  function loginInfo(username, password) {
    const cred = {
      username,
      password,
    };

    props
      .getUserData(cred.username, cred.password)
      .then((res) => {
        props.handleUserDataResults(res);
        // Update isLoggedIn state on successful login
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error("Error while fetching user data:", error);
        // Handle the error, display an error message, etc.
      });
  }

  const renderLoginItem = () => {
    if (isLoggedIn) {
      return (
        <div className="item-list">
          <div className="login-item">
            <div className="identifier">
              <h1>Welcome back {props.customerInfo.customer_name}</h1>
              <h3>Previously ordered from:</h3>
            </div>
            <div className="side-scroller">
              <div className="scroll-container">
                <ul className="scroll-items">
                  {props.orderHistory.map((order, index) => (
                    <li key={index} className="scroll-item">
                      <div>
                        <img
                          src={order.restaurant_picture}
                          alt={order.restaurant_name}
                          className="restaurant-picture"
                        />
                      </div>
                      <p>Restaurant: {order.restaurant_name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="App">
      <div className="search-container">
        <Link to="/Search" className="form-field">
          <SearchField />
        </Link>
        <Login loginData={loginInfo} />
      </div>
      {renderLoginItem()}
      <RestaurantList restaurants={props.restaurants} foods={props.foods} />
      <NavigationBar />
    </div>
  );
}

export default Index;
