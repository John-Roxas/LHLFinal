import { useLocation, useParams, useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import AddFood from "../components/AddFood";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function AddFoodItem(props) {
  // obtaining these from components/FoodListItem.js

  const { id, foodItemId } = useParams(); // use the id and foodItemId for useEffect
  const history = useNavigate(); // this is used to go back to previous page

  const [state, setState] = useState({
    foodInfo: [],
    restaurantName: null
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/restaurant/${id}/food_items/${foodItemId}`)
      .then((res) => {
        // console.log("test", res);
        setState((prev) => ({
          ...prev,
          foodInfo: res.data,
          restaurantName: res.data[0].restaurantName
        }));
      })
      .catch((err) => console.log(err));
  }, [id, foodItemId]);

  return (
    <div>
      <button onClick={() => history(-1)} className="back-button">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <AddFood
        foodId={foodItemId}
        foodInfo={state.foodInfo}
        cart={props.cart}
        restaurantName={state.restaurantName}
        customerInfo={props.customerInfo}
      />
      <NavigationBar />
    </div>
  );
}

export default AddFoodItem;
