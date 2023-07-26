import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage";
import Restaurant from "./pages/Restaurant";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const apiURLS = {
    GET_RESTAURANTS: "/api/restaurants",
    GET_FOOD_ITEMS: "http://localhost:8080/api/food_items",
    GET_VISIT: "http://localhost:8080/restaurants/1",
  };
  const [state, setState] = useState({
    restaurant: [],
    foodList: [],
  });

  //Code for multiple axios request
  // useEffect(() => {
  //   Promise.all([axios.get(apiURLS.GET_RESTAURANTS)])
  //     .then((all) => {
  //       setState((prev) => ({
  //         ...prev,
  //         restaurants: all[0].data,
  //       }));
  //     })
  //     .catch((err) => console.log(err));
  // }, [apiURLS.GET_RESTAURANTS]);

  //test single axios request
  useEffect(() => {
    axios.get(apiURLS.GET_RESTAURANTS).then((response) => {
      console.log(response.data);
      setState((prev) => ({
        ...prev,
        restaurant: response.data,
      }));
    });
  }, [apiURLS.GET_RESTAURANTS]);

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home restaurant={state.restaurant} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
