import { useState, useEffect } from "react";
import axios from "axios";

const useLogin = () => {
  const [loginState, setLoginState] = useState({
    showLoginPopup: false,
    username: "",
    password: "",
    isLoggedIn: false,
    customerInfo: {},
  });

  const handleLoginClick = () => {
    setLoginState((prev) => ({ ...prev, showLoginPopup: true }));
  };

  const closeLoginPopup = () => {
    setLoginState((prev) => ({ ...prev, showLoginPopup: false }));
  };
  //Handles the login button and creates cookie session on the backend
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:8080/login",
        { username: loginState.username, password: loginState.password },
        { withCredentials: true }
      )
      .then((res) => {
        console.log("From app", res.data);
        setLoginState((prev) => ({
          ...prev,
          isLoggedIn: true,
          username: "",
          password: "",
          customerInfo: res.data,
        }));
      })
      .catch((error) => console.log(error));
    closeLoginPopup();
  };
  //Handles the logout function where it deleted the cookie session on the backend
  const handleLogout = () => {
    axios
      .post("http://localhost:8080/logout", null, { withCredentials: true })
      .then((res) => {
        console.log("Logout successful");
        setLoginState((prev) => ({
          ...prev,
          isLoggedIn: false,
          username: "",
          password: "",
          customerInfo: {},
        }));
      })
      .catch((error) => console.log(error));
  };

  return {
    loginState,
    setLoginState,
    handleLoginClick,
    closeLoginPopup,
    handleLoginSubmit,
    handleLogout,
  };
};

export default useLogin;
