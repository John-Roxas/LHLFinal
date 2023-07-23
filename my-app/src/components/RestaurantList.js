import RestaurantListItem from "./RestaurantListItem";
import "./RestaurantList.css";

export default function RestaurantList(props) {
  const restaurants = props.restaurant.map((restaurant) => {
    return (
      <RestaurantListItem
        key={restaurant.id}
        id={restaurant.id}
        name={restaurant.restaurant_name}
        picture={restaurant.restaurant_picture}
        // food={restaurant.food}
      />
    );
  });

  return <div className="restaurant-container">{restaurants}</div>;
}
