import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const apiURLS = {
    GET_RESTAURANTS: "/api/restaurants",
    GET_FOOD_ITEMS: "/api/food_items",
  };

  const [restaurantsList, setrestaurantList] = useState([]);
  // useEffect(() => {
  //   Promise.all([axios.get(apiURLS.GET_RESTAURANTS)]).then((all) => {
  //     setState((prev) => ({
  //       ...prev,
  //       restaurants: all[0].data,
  //     }));
  //   });
  // }, [apiURLS.GET_RESTAURANTS]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080${apiURLS.GET_RESTAURANTS}`)
      .then((response) => {
        console.log(response.data);
        setrestaurantList(response.data);
        // setState((prev) => ({
        //   ...prev,
        //   restaurants: response.data,
        // }));
      });
  }, []);

  return (
    <div className="App">
      <h1>Hello!</h1>
      <h2>List of Restaurants</h2>
      {restaurantsList.map((props) => {
        return (
          <li>
            Restaurant email: {props.email} | Restaurant City: {props.city}
          </li>
        );
      })}
    </div>
  );
}

export default App;
