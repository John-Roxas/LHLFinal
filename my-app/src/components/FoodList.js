import "./FoodList.css";
import FoodListItem from "./FoodListItem";

function FoodList(props) {
  const foodData = props.foods;
  const foods = foodData.map((food) => {
    const restaurantId = props.restaurantId || food.restaurantId;
    const restaurantName = props.restaurantName || food.restaurantName;
    return (
      <FoodListItem
        restaurantId={restaurantId}
        name={food.food_name}
        price={food.price}
        foodId={food.id}
        picture={food.picture}
        description={food.description}
        restaurantName={restaurantName}
      />
    );
  });

  return <div className="food-list-container">{foods}</div>;
}

export default FoodList;
