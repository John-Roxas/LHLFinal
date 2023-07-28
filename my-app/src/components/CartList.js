// DEPRECATED CODE

import CartListItem from "./CartListItem";

function CartList(props) {
  const cartItems = props.cart.map((cartItem) => {
    return (
      <div>
        <CartListItem
          key={cartItem.id}
          name={cartItem.foodName}
          price={cartItem.price}
          quantity={cartItem.quantity}
          totalPrice={cartItem.totalPrice}
        />
      </div>
    );
  });

  return <div>{cartItems}</div>;
}

export default CartList;
