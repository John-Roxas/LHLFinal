import axios from "axios";

const useOrderHistory = () => {
  function getOrderHistoryData(customerID) {
    console.log("from useOrderHistory customerID", customerID);
    return axios
      .post(
        "http://localhost:8080/orderhistory",
        { cID: customerID },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log("from getOrderHistoryData", res.data);
        // Set the cookie in session storage or cookies
        // Replace "your_cookie_name" with the actual name of your cookie
        // sessionStorage.setItem("session", JSON.stringify(res.data));
        // document.cookie = `session=${JSON.stringify(res.data)}; path=/`;
        return res.data;
      })
      .catch((error) => console.log(error));
  }

  return {
    getOrderHistoryData,
  };
};

export default useOrderHistory;
