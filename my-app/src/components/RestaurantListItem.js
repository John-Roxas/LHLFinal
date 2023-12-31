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
            <div className="restaurant-desc">
              <h1 className="restaurant-name">{props.name}</h1>
              <p>{props.address}</p>
              <p>{props.postalCode}</p>
              <p>Delivery Fee: $3.99</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
