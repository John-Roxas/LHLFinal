import RestaurantListItem from "./RestaurantListItem";
import "./RestaurantList.css";

export default function RestaurantList(props) {
  const restaurants = props.restaurants.map((restaurant) => {
    return (
      <div className="restaurant-list">
        <RestaurantListItem
          key={restaurant.id}
          id={restaurant.id}
          name={restaurant.restaurant_name}
          picture={restaurant.restaurant_picture}
          food={restaurant.foods}
        />
      </div>
    );
  });

  return <div className="restaurant-container">{restaurants}</div>;
}
