import React, { useState, useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import useLogin from "../hooks/useLogin";

function Profile(props) {
  const { handleLogout } = useLogin();

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

  const sessionData = sessionStorage.getItem("session");
  if (!sessionData) {
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
  console.log(props.customerInfo);

  return (
    <div className="App">
      <div className="profile-container">
        <div className="tile-item">
          <img src={props.customerInfo.customer_avatar} alt="Avatar" />
        </div>
        <div className="tile-item">{props.customerInfo.customer_name}</div>
        <div className="tile-item">List</div>
        <div className="tile-item">{getSessionData()}</div>

        <div className="tile-item">
          <button className="login-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* <h2 className="profile-container"></h2> */}
      <NavigationBar />
    </div>
  );
}

export default Profile;
