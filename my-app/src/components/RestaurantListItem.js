import { Link } from "react-router-dom";
import "./RestaurantListItem.css";

export default function RestaurantListItem(props) {
  return (
    <Link
      to={`/restaurants/${props.id}`} // {/* state passes information to be used in `/restaurants/${props.id}` end point */}
      state={{
        // for states being passed checkout pages/Restaurant.js
        restaurantId: props.id,
        name: props.name,
        picture: props.picture,
        address: props.address, // NEW LINE
        postalCode: props.postalCode, // NEW LINE
      }}
      style={{ textDecoration: "none" }}
    >
      <article className="food-container">
        <div className="food-info">
          <div className="tile-item">
            <img src={props.picture} alt={props.name} />
            <h1>{props.name}</h1>
          </div>
        </div>
      </article>
    </Link>
  );
}
