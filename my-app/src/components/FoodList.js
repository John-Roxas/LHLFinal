import FoodListItem from "./FoodListItem";

function FoodList(props) {
  const foodData = props.food;
  const foods = foodData.map((food) => {
    return <FoodListItem name={food.item} price={food.price} />;
  });

  return <div>{foods}</div>;
}

export default FoodList;
