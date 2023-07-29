// rename to a noun instead of a verb

import { useState, useEffect } from "react";
import Minus from "./buttons/Minus";
import Add from "./buttons/Add";
import AddToCart from "./buttons/AddToCart";
// update to only have 1 button, pass it different values based on what the use is
import "./AddFood.css";

function AddFood(props) {
  const [foodCounter, setFoodCounter] = useState(1);

  // optional chaining '?' before food (ex. food?)
  // It ensures that the code won't break if the food object is null or undefined
  const food = props.foodInfo[0];
  let cost = food?.price;
  let totalPrice = cost * foodCounter;

  const cartItem = {
    foodName: food?.food_name,
    price: food?.price,
    quantity: 1,
  };

  const handleSubmit = () => {
    cartItem["quantity"] = foodCounter;
    props.cart.push(cartItem);
    console.log(props.cart);
  };

  return (
    <div className="add-food-container">
      <h2>{food?.food_name}</h2>
      <img src={food?.picture} className="food-photo" />
      <p>${food?.price}</p>
      <p>{food?.description}</p>
      <div className="food-count">
        <Minus foodCounter={foodCounter} setFoodCounter={setFoodCounter} />
        <span> {foodCounter} </span>
        <Add foodCounter={foodCounter} setFoodCounter={setFoodCounter} />
      </div>
      {/* <AddToCart foodCounter={foodCounter} foodPrice={cost} /> */}

      <button onClick={handleSubmit}>
        Add {foodCounter} to cart - ${totalPrice.toFixed(2)}
      </button>
    </div>
  );
}

export default AddFood;
