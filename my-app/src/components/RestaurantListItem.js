import { Link } from "react-router-dom";

export default function RestaurantListItem(props) {
  return (
    <article>
      <a>
        <h1>
          <span>{props.name}</span>
        </h1>
        <Link
          to={`/restaurant/${props.id}`}
          state={{ name: props.name, food: props.food }}
        >
          <button class="btn" type="submit">
            Visit
          </button>
        </Link>
      </a>
    </article>
  );
}
