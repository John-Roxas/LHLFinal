import RestaurantListItem from "./RestaurantListItem";
import "./RestaurantList.css";

export default function RestaurantList() {
  const restaurantsData = [
    {
      id: 1,
      name: "A&W",
      food: [
        { item: "Buddy Burger", price: 2 },
        { item: "Fries", price: 2 },
        { item: "Root Beer", price: 2 },
        { item: "Sprite", price: 2 },
      ],
    },
    {
      id: 2,
      name: "McDonalds",
      food: [
        { item: "Cheese Burger", price: 2 },
        { item: "Large Fries", price: 2 },
        { item: "Coke", price: 2 },
        { item: "Sprite", price: 2 },
      ],
    },
    {
      id: 3,
      name: "CoCo's",
      food: [
        { item: "Milk Tea", price: 2 },
        { item: "Green Tea", price: 2 },
        { item: "Mango Shake", price: 2 },
        { item: "Strawberry Tornado", price: 2 },
      ],
    },
    {
      id: 4,
      name: "New Mandarin",
      food: [
        { item: "Chicken Bun", price: 2 },
        { item: "Pork Bun", price: 2 },
        { item: "Beef Bun", price: 2 },
        { item: "Hot Tea", price: 2 },
      ],
    },
  ];

  const restaurants = restaurantsData.map((restaurant) => {
    return (
      <RestaurantListItem
        key={restaurant.id}
        id={restaurant.id}
        name={restaurant.name}
        food={restaurant.food}
      />
    );
  });

  return <div className="restaurant-container">{restaurants}</div>;
}
