import React, { useState, useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import axios from "axios";

function Profile(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!sessionStorage.getItem("session")
  );

  useEffect(() => {
    const sessionData = sessionStorage.getItem("session");
    setIsLoggedIn(!!sessionData);
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
            <div className="tile-item">Please login to view the profile.</div>
          </div>
        </div>
        <NavigationBar />
      </>
    );
  }

  const handleLogout = () => {
    // axios
    //   .post("http://localhost:8080/logout", null, { withCredentials: true })
    //   .then((res) => {
    //     console.log("Logout successful");
    //     // Delete the cookie from session storage or cookies
    //     // Replace "your_cookie_name" with the actual name of your cookie
    //     sessionStorage.removeItem("session");
    //     document.cookie =
    //       "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    //     setIsLoggedIn(false);
    //   })
    //   .catch((error) => console.log(error));
    sessionStorage.removeItem("session");
    document.cookie =
      "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
  };

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

      <NavigationBar />
    </div>
  );
}

export default Profile;
