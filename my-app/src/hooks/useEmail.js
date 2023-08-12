import axios from "axios";

const useEmail = () => {
  function emailOrderData(orderData, orderTotal) {
    const order = {
      orderData,
      orderTotal,
    };
    console.log("Email button was clicked, function working");
    //null is where you would send the order information or maybe grab the order from the cookie session
    return axios
      .post("http://localhost:8080/email", order, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("from emailOrderData function", res.data);
        // Set the cookie in session storage or cookies
        // Replace "your_cookie_name" with the actual name of your cookie
        // sessionStorage.setItem("session", JSON.stringify(res.data));
        // document.cookie = `session=${JSON.stringify(res.data)}; path=/`;
        return res.data;
      })
      .catch((error) => console.log(error));
  }

  return {
    emailOrderData,
  };
};

export default useEmail;
