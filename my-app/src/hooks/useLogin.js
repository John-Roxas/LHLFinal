import axios from "axios";

const useLogin = () => {
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

  return {
    getUserData,
  };
};

export default useLogin;
