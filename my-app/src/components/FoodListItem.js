import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FoodListItem.css";
import { useState } from "react";

import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function FoodListItem(props) {
  const [foodCounter, setFoodCounter] = useState(0);

  const handlerDecrease = () => {
    setFoodCounter((prev) => prev - 1);
  };

  const handlerIncrease = () => {
    setFoodCounter((prev) => prev + 1);
  };

  return (
    <article className="foodContainer">
      <div className="foodInfo">
        {props.name} ${props.price}
      </div>
      <div className="foodCount">
        <button onClick={handlerDecrease} className="minusButton">
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <span> {foodCounter} </span>
        <button onClick={handlerIncrease} className="plusButton">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </article>
  );
}

export default FoodListItem;
