import { Link } from "react-router-dom";
import "./RestaurantListItem.css";

export default function RestaurantListItem(props) {
  return (
    <article className="restaurant-item">
      <div>
        <img
          src={props.picture}
          alt={props.name}
          onClick={console.log("Clicked")}
        />
      </div>
      <div className="restaurant-desc">
        <div>
          <h1>{props.name}</h1>
        </div>
        <div>
          <p>Delivery fee</p>
        </div>
        <a>
          {/* state passes information to be used in `/restaurants/${props.id}` end point */}
          <Link
            to={`/restaurants/${props.id}`}
            state={{ restaurantId: props.id, name: props.name }}
          >
            <button class="btn" type="submit" onClick={console.log(1)}>
              Visit
            </button>
          </Link>
        </a>
      </div>
      <h3></h3>
    </article>
  );
}
