import RestaurantListItem from "./RestaurantListItem";
import './RestaurantList.css';

export default function RestaurantList() {
  const restaurantsData = [
    {id: 1, name: "A&W"},
    {id: 2, name: "McDonalds"},
    {id: 3, name: "CoCo's"},
    {id: 4, name: "New Mandarin"}
  ];

  const restaurants = restaurantsData.map((restaurant) => {
    return (
      <RestaurantListItem 
        id={restaurant.id}
        name={restaurant.name}
      />
    )
  })

  return (
    <div>
      {restaurants}
    </div>
  )
}