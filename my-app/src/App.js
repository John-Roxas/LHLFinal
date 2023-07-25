import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage";
import Restaurant from "./pages/Restaurant";
import AddFoodItem from "./pages/AddFoodItem";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState({
    restaurants: [],
    foodList: [],
  });

  const apiURLS = {
    GET_RESTAURANTS: "http://localhost:8080/api/restaurants",
    // GET_FOOD_ITEMS: "http://localhost:8080/api/food_items",
    GET_VISIT: "http://localhost:8080/restaurants/1",
  };

  // Code for multiple axios request
  useEffect(() => {
    Promise.all([
      axios.get(apiURLS.GET_RESTAURANTS),
      axios.get(apiURLS.GET_VISIT),
    ])
      .then((all) => {
        console.log("Restaurant Data:", all[0].data);
        console.log("Food List Data:", all[1].data);
        setState((prev) => ({
          ...prev,
          restaurants: all[0].data,
          foodList: all[1].data,
        }));
      })
      .catch((err) => console.log(err));
  }, [apiURLS.GET_RESTAURANTS, apiURLS.GET_VISIT]);

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home restaurants={state.restaurants} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/restaurants/:id"
            element={<Restaurant foods={state.foodList} />}
          />
          <Route
            path="/restaurants/:id/food_items/:foodItemId"
            element={<AddFoodItem />}
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
