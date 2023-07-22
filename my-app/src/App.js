import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import RestaurantList from "./components/RestaurantList";

function App() {
  const apiURLS = {
    GET_RESTAURANTS: "api/restaurants",
    GET_FOOD_ITEMS: "api/food_items",
  };

  const [restaurantsList, setrestaurantList] = useState([]);

  //Code for multiple axios request
  // useEffect(() => {
  //   Promise.all([axios.get(apiURLS.GET_RESTAURANTS)]).then((all) => {
  //     setState((prev) => ({
  //       ...prev,
  //       restaurants: all[0].data,
  //     }));
  //   });
  // }, [apiURLS.GET_RESTAURANTS]);

  //test single axios request
  useEffect(() => {
    axios
      .get(`http://localhost:8080/${apiURLS.GET_RESTAURANTS}`)
      .then((response) => {
        console.log(response.data);
        setrestaurantList(response.data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Hello!</h1>
      <h2>List of Restaurants</h2>

      {/* <RestaurantList
        key={restaurantsList.id}
        name={restaurantsList.name}
        email={restaurantsList.email}
        category={restaurantsList.category}
      /> */}
      {restaurantsList.map((props) => {
        return (
          <li>
            Restaurant: {props.restaurant_name} | Restaurant City: {props.city}
          </li>
        );
      })}
    </div>
  );
}

export default App;
