import "./CartListItem.css";

function CartListItem(props) {
  return (
    <div className="cart-list-item-container">
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  );
}

export default CartListItem;
