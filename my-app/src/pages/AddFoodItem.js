import { useLocation } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import AddFood from "../components/AddFood";

function AddFoodItem() {
  const location = useLocation();
  const { foodId } = location.state;

  return (
    <div>
      <AddFood foodId={foodId} />
      <NavigationBar />
    </div>
  );
}

export default AddFoodItem;
