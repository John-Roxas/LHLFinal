import RestaurantListItem from "./RestaurantListItem";
import "./RestaurantList.css";

export default function RestaurantList(props) {
  const restaurants = props.restaurants.map((restaurant) => {
    const address = `${restaurant.restaurant_street_address} ${restaurant.city}`;
    const postalCode = restaurant.postal_code;
    return (
      <div className="restaurant-list">
        <RestaurantListItem
          key={restaurant.id}
          id={restaurant.id}
          name={restaurant.restaurant_name}
          picture={restaurant.restaurant_picture}
          food={restaurant.foods}
          address={address} // NEW LINE
          postalCode={postalCode} // NEW LINE
        />
      </div>
    );
  });

  return <div className="restaurant-container">{restaurants}</div>;
}
