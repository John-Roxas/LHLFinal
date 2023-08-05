import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import NoPage from "./pages/NoPage";
import Restaurant from "./pages/Restaurant";
import AddFoodItem from "./pages/AddFoodItem";
import { useEffect, useState } from "react";
import axios from "axios";
//Importing login hook
import useLogin from "./hooks/useLogin";

function App() {
  const apiURLS = {
    GET_RESTAURANTS: "/api/restaurants",
    GET_CUSTOMERS: "/api/customers",
    GET_FOOD_ITEMS: "/api/food_items",
    SEARCH_ROOT: "/api/search",
  };

  //Destructuring the useLogin hook
  const { getUserData } = useLogin();

  //All API states
  const [apiState, setApiState] = useState({
    restaurants: [],
    foodList: [],
    customers: [],
  });

  //Axios calls here
  useEffect(() => {
    Promise.all([axios.get(apiURLS.GET_RESTAURANTS)])
      .then((all) => {
        setApiState((prev) => ({
          ...prev,
          restaurants: all[0].data,
        }));
      })
      .catch((err) => console.log(err));
  }, [apiURLS.GET_RESTAURANTS]);

  //Update all states to use apiState
  //Clement to verify restaurants is functional
  // const [state, setState] = useState({
  //   restaurants: [],
  // });
  //John to confirm cart functionality
  const [cart, setCart] = useState([]);

  const [customerInfo, setCustomerInfo] = useState({});
  const handleUserDataResults = (data) => {
    console.log("data received from Login in App.js", data);
    setCustomerInfo(data);
  };
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route
            path="/search"
            element={<Search API_ROOT={apiURLS.SEARCH_ROOT} />}
          />
          <Route
            index
            element={
              <Home
                handleUserDataResults={handleUserDataResults}
                getUserData={getUserData}
                restaurants={apiState.restaurants}
                customerInfo={customerInfo}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} customerInfo={customerInfo} />}
          />
          <Route
            path="/profile"
            element={<Profile customerInfo={customerInfo} />}
          />
          <Route
            path="/restaurants/:id"
            element={<Restaurant customerInfo={customerInfo} />}
          />
          <Route
            path="/restaurant/:id/food_items/:foodItemId"
            element={<AddFoodItem cart={cart} />}
          />
          {/* confirm this is the closing elemtn for line 92 restaurant */}
          route
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
