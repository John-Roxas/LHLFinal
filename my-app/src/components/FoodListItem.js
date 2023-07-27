import "./FoodListItem.css";
import { Link } from "react-router-dom";

function FoodListItem(props) {
  return (
    <Link
      to={`/restaurants/${props.restaurantId}/food_items/${props.foodId}`}
      state={{ foodId: props.foodId }}
      style={{ textDecoration: "none" }} // Had to apply this here to get rid of black underlines in h2 and p
    >
      <article className="food-container">
        <div className="food-info">
          <div class="food-text">
            <h2>{props.name} </h2>
            <p>${props.price}</p>
            <p>{props.description}</p>
          </div>
          <img src={props.picture} className="food-photo" />
        </div>
      </article>
    </Link>
  );
}

export default FoodListItem;
