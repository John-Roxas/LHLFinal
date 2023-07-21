export default function RestaurantListItem(props) {
  return (
    <article>
      <a>
        {/* use props.id to create href link*/}
        <h1>
          <span>{props.name}</span>
        </h1>
        <button class="btn" type="submit">
          Visit
        </button>
      </a>
    </article> 
  )
}