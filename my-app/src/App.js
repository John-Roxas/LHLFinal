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
  });

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
          <Route index element={<Home restaurants={state.restaurants} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/restaurants/:id" element={<Restaurant />} />
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
