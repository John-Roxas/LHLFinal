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
//Importing login hook
import useLogin from "./hooks/useLogin";
import Login from "./components/Login";

function App() {

  const apiURLS = {
    GET_RESTAURANTS: "/api/restaurants",
    GET_CUSTOMERS: "/api/customers",
    GET_FOOD_ITEMS: "http://localhost:8080/api/food_items",
    GET_VISIT: "http://localhost:8080/restaurants/1",
    SEARCH_ROOT: "http://localhost:8080/api/search"
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

  //Update all states to use apiState
  //Clement to verify restaurants is functional
//   const [state, setState] = useState({
//     restaurants: [],
//   });
//John to confirm cart functionality
  const [cart, setCart] = useState([]);
  // const cart = [];


  return (
    <main>
      <BrowserRouter>
        <Routes>

    //confirm login button exist before deleting
//           <Route
//             index
//             element={
//               <Home
//                 element={
//                   <Login
//                     loginState={loginState}
//                     setLoginState={setLoginState}
//                     handleLoginClick={handleLoginClick}
//                     handleLoginSubmit={handleLoginSubmit}
//                     handleLogout={handleLogout}
//                   />
//                 }
//               />
//             }
//           />
//           <Route path="/cart" element={<Cart loginState={loginState}/>} />
//           <Route
//             path="/profile"
//             element={<Profile loginState={loginState} />}
//           />
//           <Route
//             path="/restaurant/:id"
//             element={<Restaurant loginState={loginState} />} 

          <Route path="/search" element={<Search API_ROOT={apiURLS.SEARCH_ROOT} />} />
          <Route index element={<Home restaurants={apiState.restaurants} 
element={
                  <Login
                    loginState={loginState}
                    setLoginState={setLoginState}
                    handleLoginClick={handleLoginClick}
                    handleLoginSubmit={handleLoginSubmit}
                    handleLogout={handleLogout}
                  />
                } />} />
          <Route path="/cart" element={<Cart cart={cart} loginState={loginState}/>} />
          <Route path="/profile" element={<Profile loginState={loginState}/>} />
          <Route path="/restaurants/:id" element={<Restaurant loginState={loginState}/>} />
          <Route
            path="/restaurants/:id/food_items/:foodItemId"
            element={<AddFoodItem cart={cart} />}

//           /> //confirm this is the closing elemtn for line 92 restaurant route
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
