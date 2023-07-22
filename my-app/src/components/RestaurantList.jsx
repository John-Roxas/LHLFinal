import React from "react";
import RestaurantListItem from "./RestaurantListItem";

export default function RestaurantList(props) {
  const restaurant = props.restaurant.map((restaurant) => {
    return (
      <RestaurantListItem
        key={restaurant.id}
        name={restaurant.name}
        email={restaurant.email}
        category={restaurant.category}
      />
    );
  });
  return <ul>{restaurant}</ul>;
}
