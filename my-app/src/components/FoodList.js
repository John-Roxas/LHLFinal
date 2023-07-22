import "./FoodList.css";
import FoodListItem from "./FoodListItem";

function FoodList(props) {
  const foodData = props.food;
  const foods = foodData.map((food) => {
    return <FoodListItem name={food.item} price={food.price} />;
  });

  return <div className="food-list-container">{foods}</div>;
}

export default FoodList;
