import SearchField from "../components/SearchField";
import NavigationBar from "../components/NavigationBar";
import RestaurantList from "../components/RestaurantList";
import Login from "../components/Login";
import React, { useState, useEffect } from "react";

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
        <div className="login-item">
          <div className="identifier">
            <h1>Welcome back {props.customerInfo.customer_name}</h1>
            <h3>Previously order from:</h3>
          </div>
          <div className="side-scroller"></div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="App">
      <div className="search-container">
        <a href="/search" className="form-field">
          <SearchField />
        </a>
        <Login loginData={loginInfo} />
      </div>
      {renderLoginItem()}
      <RestaurantList restaurants={props.restaurants} foods={props.foods} />
      <NavigationBar />
    </div>
  );
}

export default Index;
