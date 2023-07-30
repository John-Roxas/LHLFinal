import { useEffect } from "react";
import axios from "axios";

const useLogin = () => {
  // const [loginState, setLoginState] = useState({
  //   showLoginPopup: false,
  //   username: "",
  //   password: "",
  //   isLoggedIn: false,
  //   customerInfo: {},
  // });

  const checkCookieExistence = () => {
    // Check if the cookie exists in session storage or cookies
    // Replace "your_cookie_name" with the actual name of your cookie
    const cookieValue =
      sessionStorage.getItem("session") ||
      document.cookie.split(";").find((c) => c.trim().startsWith("session="));

    // If the cookie exists, update the login state in the React app
    if (cookieValue) {
      // setLoginState((prev) => ({ ...prev, isLoggedIn: true }));
    }
  };

  useEffect(() => {
    checkCookieExistence();
  }, []);

  // const handleLoginClick = () => {
  //   setLoginState((prev) => ({ ...prev, showLoginPopup: true }));
  // };

  // const closeLoginPopup = () => {
  //   setLoginState((prev) => ({ ...prev, showLoginPopup: false }));
  // };

  // // When a user logs in successfully, set the isLoggedIn state to true and store the cookie
  // const handleLoginSubmit = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post(
  //       "http://localhost:8080/login",
  //       { username: loginState.username, password: loginState.password },
  //       { withCredentials: true }
  //     )
  //     .then((res) => {
  //       console.log("From app", res.data);
  //       setLoginState((prev) => ({
  //         ...prev,
  //         isLoggedIn: true,
  //         username: "",
  //         password: "",
  //         customerInfo: res.data,
  //       }));

  //       // Set the cookie in session storage or cookies
  //       // Replace "your_cookie_name" with the actual name of your cookie
  //       sessionStorage.setItem("session", loginState.username);
  //       document.cookie = `session=${loginState.username}; path=/`;
  //     })
  //     .catch((error) => console.log(error));
  //   closeLoginPopup();
  // };

  function getUserData(username, password) {
    return axios
      .post(
        "http://localhost:8080/login",
        { username, password },
        { withCredentials: true }
      )
      .then((res) => {
        console.log("from getUserData function", res.data);
        // Set the cookie in session storage or cookies
        // Replace "your_cookie_name" with the actual name of your cookie
        sessionStorage.setItem("session", JSON.stringify(res.data));
        document.cookie = `session=${JSON.stringify(res.data)}; path=/`;
        return res.data;
      })
      .catch((error) => console.log(error));
  }

  //Handles the logout function where it deleted the cookie session on the backend
  const handleLogout = () => {
    axios
      .post("http://localhost:8080/logout", null, { withCredentials: true })
      .then((res) => {
        console.log("Logout successful");
        // Delete the cookie from session storage or cookies
        // Replace "your_cookie_name" with the actual name of your cookie
        sessionStorage.removeItem("session");
        document.cookie =
          "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      })
      .catch((error) => console.log(error));
  };

  return {
    handleLogout,
    getUserData,
  };
};

export default useLogin;
