import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchField from "../components/SearchField";
import NavigationBar from "../components/NavigationBar";
import FoodList from "../components/FoodList";
import "./Restaurant.css";

function Restaurant(props) {
  // These two take information passed from /src/components/RestaurantListItem
  const location = useLocation();
  const { restaurantId, name, picture } = location.state;

  const [state, setState] = useState({
    foodList: [],
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/restaurants/${restaurantId}`)
      .then((res) => {
        setState((prev) => ({
          ...prev,
          foodList: res.data,
        }));
      })
      .catch((err) => console.log(err));
  }, [restaurantId]);

  // console.log("restaurantId", restaurantId);
  return (
    <div className="App">
      <SearchField />
      <div className="restaurant-foods-container">
        <div>
          <img src={picture} alt={name} className="restaurant-picture" />
        </div>
        <h2>{name}</h2>
        <FoodList
          restaurantId={restaurantId}
          foods={state.foodList}
          restaurantName={name} //Grabbed from useLocation() on Line 11 and 12
        />
      </div>
      <NavigationBar />
    </div>
  );
}

export default Restaurant;
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import SearchField from "../components/SearchField";
// import NavigationBar from "../components/NavigationBar";
// import FoodList from "../components/FoodList";
// import "./Restaurant.css";

// function Restaurant(props) {
//   // These two take information passed from /src/components/RestaurantListItem
//   const location = useLocation();
//   const { restaurantId, name, picture } = location.state;

//   const [state, setState] = useState({
//     foodList: [],
//   });

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8080/restaurants/${restaurantId}`)
//       .then((res) => {
//         setState((prev) => ({
//           ...prev,
//           foodList: res.data,
//         }));
//       })
//       .catch((err) => console.log(err));
//   }, [restaurantId]);

//   console.log("restaurantId", restaurantId);
//   return (
//     <div className="App">
//       <SearchField />
//       <div className="restaurant-foods-container">
//         <div>
//           <img src={picture} alt={name} className="restaurant-picture" />
//         </div>
//         <h2>{name}</h2>
//         <FoodList restaurantId={restaurantId} foods={state.foodList} />
//       </div>
//       <NavigationBar />
//     </div>
//   );
// }

// export default Restaurant;
