import { Link } from "react-router-dom";

export default function RestaurantListItem(props) {
  return (
    <article>
      <a>
        <div>
          <img
            src={props.picture}
            alt={props.name}
            onClick={console.log("Clicked")}
          />
        </div>
        <h3>
          <span>{props.name}</span>
        </h3>

        <Link
          to={`/restaurant/${props.id}`}
          state={{ name: props.name, food: props.food }}
        >
          <button class="btn" type="submit" onClick={console.log(1)}>
            Visit
          </button>
        </Link>
      </a>
    </article>
  );
}
