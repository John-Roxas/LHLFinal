import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import useLogin from "../hooks/useLogin";

function Login() {
  const {
    handleLoginClick,
    closeLoginPopup,
    handleLoginSubmit,
    loginState,
    setLoginState,
  } = useLogin();
  //Destructing the loginState
  const { showLoginPopup, username, password, isLoggedIn } = loginState;

  // This function ensures the username form field doesnt immediately submit onChange
  const handleUsernameChange = (event) => {
    const { value } = event.target;
    // Update the local state for the username
    setLoginState((prev) => ({ ...prev, username: value }));
  };
  // This function ensures the password form field doesnt immediately submit onChange
  const handlePasswordChange = (event) => {
    const { value } = event.target;
    // Update the local state for the password
    setLoginState((prev) => ({ ...prev, password: value }));
  };

  //Rendering login button function
  const renderLoginButton = () => {
    if (isLoggedIn) {
      return null;
    } else {
      return (
        <button className="login-button" onClick={handleLoginClick}>
          Login
        </button>
      );
    }
  };

  return (
    <div>
      <div className="login-container">
        {renderLoginButton()}
        {showLoginPopup && (
          <>
            <div className="overlay" onClick={closeLoginPopup} />
            <div className="login-popup">
              <form className="login-form" onSubmit={handleLoginSubmit}>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={handleUsernameChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <button type="submit">Submit</button>
              </form>
              <button className="close-button" onClick={closeLoginPopup}>
                <FontAwesomeIcon icon={faRectangleXmark} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
