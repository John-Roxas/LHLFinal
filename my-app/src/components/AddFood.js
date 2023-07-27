import { useState, useEffect } from "react";
import Minus from "../components/buttons/Minus";
import Add from "../components/buttons/Add";
import AddToCart from "../components/buttons/AddToCart";
import "./AddFood.css";

function AddFood(props) {
  const [foodCounter, setFoodCounter] = useState(1);
  const [formData, setFormData] = useState({
    foodName: "",
    price: 0,
    quantity: 0,
    totalPrice: 0,
  });

  useEffect(() => {
    console.log(formData); // This will log the updated formData whenever it changes.
  }, [formData]);

  // optional chaining '?' before food (ex. food?)
  // It ensures that the code won't break if the food object is null or undefined
  const food = props.foodInfo[0];
  let cost = food?.price;
  let totalPrice = cost * foodCounter;

  const handleSubmit = () => {
    setFormData((prev) => ({
      ...prev,
      foodName: food?.food_name,
      price: food?.price,
      quantity: foodCounter,
      totalPrice: totalPrice,
    }));
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
        Add {foodCounter} to cart - ${(cost * foodCounter).toFixed(2)}
      </button>
    </div>
  );
}

export default AddFood;
