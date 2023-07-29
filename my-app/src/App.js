import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Search from "./pages/Search"
import NoPage from "./pages/NoPage";
import Restaurant from "./pages/Restaurant";
import AddFoodItem from "./pages/AddFoodItem";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const apiURLS = {
    GET_RESTAURANTS: "http://localhost:8080/api/restaurants",
    GET_FOOD_ITEMS: "http://localhost:8080/api/food_items",
    GET_VISIT: "http://localhost:8080/restaurants/1",
    SEARCH_ROOT: "http://localhost:8080/api/search"
  };

  const [state, setState] = useState({
    restaurants: [],
  });

  const [cart, setCart] = useState([]);
  // const cart = [];

  const apiURLS = {
    GET_RESTAURANTS: "http://localhost:8080/api/restaurants",
  };

  useEffect(() => {
    axios.get("http://localhost:8080/api/restaurants").then((res) => {
      setState((prev) => ({
        ...prev,
        restaurants: res.data,
      }));
    });
  }, []);
  // }, [apiURLS.GET_RESTAURANTS]);

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<Search API_ROOT={apiURLS.SEARCH_ROOT} />} />
          <Route index element={<Home restaurants={state.restaurants} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/restaurants/:id" element={<Restaurant />} />
          <Route
            path="/restaurants/:id/food_items/:foodItemId"
            element={<AddFoodItem cart={cart} />}
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
