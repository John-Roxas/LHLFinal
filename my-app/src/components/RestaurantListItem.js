import { Link } from "react-router-dom";
import "./RestaurantListItem.css";

export default function RestaurantListItem(props) {
  return (
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
        <a>
          <Link
            to={`/restaurant/${props.id}`}
            state={{ name: props.name, food: props.food }}
          >
            <button class="btn" type="submit">
              Visit
            </button>
          </Link>
        </a>
      </div>
      <h3></h3>
    </article>
  );
}
