import "./FoodList.css";
import FoodListItem from "./FoodListItem";

function FoodList(props) {
  const foodData = props.foods;
  const foods = foodData.map((food) => {
    return (
      <FoodListItem
        restaurantId={props.restaurantId}
        name={food.food_name}
        price={food.price}
        foodId={food.id}
      />
    );
  });

  return <div className="food-list-container">{foods}</div>;
}

export default FoodList;
