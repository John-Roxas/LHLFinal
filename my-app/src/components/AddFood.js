// rename to a noun instead of a verb
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Minus from "./buttons/Minus";
import Add from "./buttons/Add";
import "./AddFood.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";

function AddFood(props) {
  const [foodCounter, setFoodCounter] = useState(1);
  const [modal, setModal] = useState(false);

  const history = useNavigate(); // this is used to go back to previous page

  // optional chaining '?' before food (ex. food?)
  // It ensures that the code won't break if the food object is null or undefined
  const food = props.foodInfo[0];
  let cost = food?.price;
  let totalPrice = cost * foodCounter;

  const cartItem = {
    foodName: food?.food_name,
    price: food?.price,
    quantity: 1,
    restaurantName: props.restaurantName,
  };

  const handleSubmit = () => {
    cartItem["quantity"] = foodCounter;
    props.cart.push(cartItem);
    console.log(props.cart);
    setModal(true);
  };

  // const closeModal = () => {
  //   // setModal(false);
  //   history(-1);
  // };

  return (
    <div className="add-food-container">
      <h1>{food?.food_name}</h1>
      <img src={food?.picture} className="food-photo" />
      <h3>${food?.price}</h3>
      <p>{food?.description}</p>
      <div className="food-count">
        <Minus foodCounter={foodCounter} setFoodCounter={setFoodCounter} />
        <span> {foodCounter} </span>
        <Add foodCounter={foodCounter} setFoodCounter={setFoodCounter} />
      </div>
      {/* <AddToCart foodCounter={foodCounter} foodPrice={cost} /> */}

      <button onClick={handleSubmit} className="add-food-button">
        Add {foodCounter} to cart - ${totalPrice.toFixed(2)}
      </button>

      {modal && (
        <div className="modal">
          <div className="modal-content">
            <FontAwesomeIcon icon={faCheck} className="check-mark" />
            <h3>
              x{foodCounter} {food?.food_name}
            </h3>
            <p>Added to Cart!</p>
            <button onClick={() => history(-1)}>Continue Shopping</button>
            {/* <button onClick={closeModal}>Continue Shopping</button> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default AddFood;

// // rename to a noun instead of a verb

// import { useState, useEffect } from "react";
// import Minus from "./buttons/Minus";
// import Add from "./buttons/Add";
// import AddToCart from "./buttons/AddToCart";
// // update to only have 1 button, pass it different values based on what the use is
// import "./AddFood.css";

// function AddFood(props) {
//   const [foodCounter, setFoodCounter] = useState(1);

//   // optional chaining '?' before food (ex. food?)
//   // It ensures that the code won't break if the food object is null or undefined
//   const food = props.foodInfo[0];
//   let cost = food?.price;
//   let totalPrice = cost * foodCounter;

//   const cartItem = {
//     foodName: food?.food_name,
//     price: food?.price,
//     quantity: 1,
//   };

//   const handleSubmit = () => {
//     cartItem["quantity"] = foodCounter;
//     props.cart.push(cartItem);
//     console.log(props.cart);
//   };

//   return (
//     <div className="add-food-container">
//       <h2>{food?.food_name}</h2>
//       <img src={food?.picture} className="food-photo" />
//       <p>${food?.price}</p>
//       <p>{food?.description}</p>
//       <div className="food-count">
//         <Minus foodCounter={foodCounter} setFoodCounter={setFoodCounter} />
//         <span> {foodCounter} </span>
//         <Add foodCounter={foodCounter} setFoodCounter={setFoodCounter} />
//       </div>
//       {/* <AddToCart foodCounter={foodCounter} foodPrice={cost} /> */}

//       <button onClick={handleSubmit}>
//         Add {foodCounter} to cart - ${totalPrice.toFixed(2)}
//       </button>
//     </div>
//   );
// }

// export default AddFood;
