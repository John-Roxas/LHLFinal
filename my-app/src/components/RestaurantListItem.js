import { Link } from "react-router-dom";
import "./RestaurantListItem.css";

export default function RestaurantListItem(props) {
  return (
    <article className="restaurant-item">
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
        <a>
          {/* state passes information to be used in `/restaurants/${props.id}` end point */}
          <Link
            to={`/restaurants/${props.id}`}
            state={{
              restaurantId: props.id,
              name: props.name,
              picture: props.picture,
            }}
          >
            <button class="btn" type="button">
              Visit
            </button>
          </Link>
        </a>
      </div>
      <h3></h3>
    </article>
  );
}
