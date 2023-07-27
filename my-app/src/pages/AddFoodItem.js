import { useLocation, useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import AddFood from "../components/AddFood";
import { useEffect, useState } from "react";
import axios from "axios";

function AddFoodItem() {
  const location = useLocation();
  const { foodId } = location.state;

  const { id, foodItemId } = useParams();

  console.log("AddFootItem.js");
  console.log(id);
  console.log(foodItemId);

  const [state, setState] = useState({
    foodInfo: [],
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/restaurants/${id}/food_items/${foodItemId}`)
      .then((res) => {
        console.log("test", res);
        setState((prev) => ({
          ...prev,
          foodInfo: res.data,
        }));
      })
      .catch((err) => console.log(err));
  }, [id, foodItemId]);

  // console.log("id", id);
  // console.log("foodItemId", foodItemId);
  // console.log(state.foodInfo);

  return (
    <div>
      <AddFood foodId={foodId} foodInfo={state.foodInfo} />
      <NavigationBar />
    </div>
  );
}

export default AddFoodItem;
