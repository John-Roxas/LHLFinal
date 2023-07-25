import { useState } from "react";
import Minus from "../components/buttons/Minus";
import Add from "../components/buttons/Add";

function AddFood(props) {
  const [foodCounter, setFoodCounter] = useState(0);

  return (
    // <form action="">
    <div>
      <div className="food-count">
        <Minus foodCounter={foodCounter} setFoodCounter={setFoodCounter} />
        <span> {foodCounter} </span>
        <Add foodCounter={foodCounter} setFoodCounter={setFoodCounter} />
      </div>
      <button>Add To Cart!</button>
    </div>
    // </form>
  );
}

export default AddFood;
