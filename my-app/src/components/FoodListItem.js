import "./FoodListItem.css";
import { useState } from "react";
import Minus from "../components/buttons/Minus";
import Add from "../components/buttons/Add";

function FoodListItem(props) {
  const [foodCounter, setFoodCounter] = useState(0);

  return (
    <article className="food-container">
      <div className="food-info">
        {props.name} ${props.price}
      </div>
      <div className="food-count">
        <Minus foodCounter={foodCounter} setFoodCounter={setFoodCounter} />
        <span> {foodCounter} </span>
        <Add foodCounter={foodCounter} setFoodCounter={setFoodCounter} />
      </div>
    </article>
  );
}

export default FoodListItem;
