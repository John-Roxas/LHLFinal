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
      }}
      style={{ textDecoration: "none" }}
    >
      <article className="tile-item">
        <div>
          <img src={props.picture} alt={props.name} />
        </div>
        <div className="restaurant-desc">
          <div>
            <h1>{props.name}</h1>
          </div>
          <div>
            <p>Delivery fee</p>
          </div>
        </div>
      </article>
    </Link>
  );
}
