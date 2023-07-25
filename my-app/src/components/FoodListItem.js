import "./FoodListItem.css";
import { useState } from "react";
import { Link } from "react-router-dom";
// import Minus from "../components/buttons/Minus";
// import Add from "../components/buttons/Add";

function FoodListItem(props) {
  // const [foodCounter, setFoodCounter] = useState(0);

  return (
    // I want to pass in the foodItemId here
    <article className="food-container">
      <Link
        to={`/restaurants/${props.restaurantId}/food_items/${props.foodId}`}
        state={{ foodId: props.foodId }}
      >
        <div className="food-info">
          {props.name} ${props.price}
        </div>
      </Link>
    </article>
  );
}

export default FoodListItem;
