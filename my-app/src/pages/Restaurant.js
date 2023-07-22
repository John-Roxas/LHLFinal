import { useLocation } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import NavigationBar from "../components/NavigationBar";
import FoodList from "../components/FoodList";

function Restaurant() {
  const location = useLocation();
  const { name, food } = location.state;

  return (
    <div className="App">
      <SearchBar />
      <div>
        <h2>{name}</h2>
        <FoodList item={name} food={food} />
      </div>
      <NavigationBar />
    </div>
  );
}

export default Restaurant;
