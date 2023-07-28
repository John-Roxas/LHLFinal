import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage";
import Restaurant from "./pages/Restaurant";
import { useEffect, useState } from "react";
import axios from "axios";
//Importing login hook
import useLogin from "./hooks/useLogin";
import Login from "./components/Login";

function App() {
  const apiURLS = {
    GET_RESTAURANTS: "/api/restaurants",
    GET_CUSTOMERS: "/api/customers",
    GET_FOOD_ITEMS: "http://localhost:8080/api/food_items",
    GET_VISIT: "http://localhost:8080/restaurants/1",
  };

  //Destructuring the useLogin hook
  const {
    loginState,
    setLoginState,
    handleLoginClick,
    handleLoginSubmit,
    handleLogout,
  } = useLogin();

  //All API states
  const [apiState, setApiState] = useState({
    restaurant: [],
    foodList: [],
    customers: [],
  });

  //Axios calls here
  useEffect(() => {
    Promise.all([axios.get(apiURLS.GET_RESTAURANTS)])
      .then((all) => {
        setApiState((prev) => ({
          ...prev,
          restaurant: all[0].data,
        }));
      })
      .catch((err) => console.log(err));
  }, [apiURLS.GET_RESTAURANTS]);

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Home
                restaurant={apiState.restaurant}
                element={
                  <Login
                    isLoggedIn={loginState.isLoggedIn}
                    handleLoginClick={handleLoginClick}
                    handleLoginSubmit={handleLoginSubmit}
                    handleLogout={handleLogout}
                  />
                }
              />
            }
          />
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
