import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import SearchField from "../components/SearchField";
import NavigationBar from "../components/NavigationBar";
import FoodList from "../components/FoodList";
import "./Restaurant.css";
import { useParams } from 'react-router';


function Restaurant(props) {
  const params = useParams()

  const restaurantId = params.id;
  // These two take information passed from /src/components/RestaurantListItem
  // const location = useLocation();
  // const { name, picture, address, postalCode } = location.state;

  const [state, setState] = useState({
    foodList: [],
    restaurantInfo: null
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/restaurants/${restaurantId}`)
      .then((res) => {
        setState((prev) => ({
          ...prev,
          foodList: res.data,
        }));
      })
      .catch((err) => console.log(err));

    axios
      .get(`http://localhost:8080/api/restaurant/${restaurantId}`)
      .then((res) => {
        const response = res.data[0];
        setState((prev) => ({
          ...prev,
          restaurantName: response.restaurant_name,
          restaurantAddress: response.restaurant_street_address,
          restaurantPostalCode: response.postal_code,
          restaurantPicture: response.restaurant_picture,
          restaurantCity: response.city
        }));
      })
  }, []);


  return (
    <div className="App">
      <div className="search-container">
        <SearchField />
      </div>
        <div className="search-padding"></div>
        <div className="restaurant-banner">
          <img src={state.restaurantPicture} alt={state.restaurantName} className="restaurant-picture" />
          <Link
          to={"/map"}
          // these are passed to pages/Map.js
          state={{
            restaurantAddress: state.restaurantAddress + state.restaurantCity,
            restaurantPostalCode: state.restaurantPostalCode,
          }}
          style={{ textDecoration: "none" }}
        >
          <h2>{state.restaurantName}</h2>
          <p>{state.restaurantAddress}</p>
        </Link>
        </div>
        <FoodList
          restaurantId={restaurantId}
          foods={state.foodList}
          restaurantName={state.restaurantName}
        />
      <NavigationBar />
    </div>
  );
}

export default Restaurant;
