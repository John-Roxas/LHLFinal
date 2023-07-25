import { useLocation } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import NavigationBar from "../components/NavigationBar";
import FoodList from "../components/FoodList";

function Restaurant(props) {
  // These two take information passed from /src/components/RestaurantListItem
  const location = useLocation();
  const { restaurantId, name } = location.state;

  return (
    <div className="App">
      <SearchBar />
      <div className="restaurant-foods-container">
        <h2>{name}</h2>
        <FoodList restaurantId={restaurantId} foods={props.foods} />
      </div>
      <NavigationBar />
    </div>
  );
}

export default Restaurant;
