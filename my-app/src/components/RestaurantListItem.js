import { Link } from "react-router-dom";

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
      <div>
        <div>
          <span>{props.name}</span>
        </div>
        <div>
          <p>The description</p>
        </div>
        <a>
          <Link
            to={`/restaurant/${props.id}`}
            state={{ name: props.name, food: props.food }}
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
