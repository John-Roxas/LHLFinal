function AddToCart(props) {
  return (
    <button>
      Add {props.foodCounter} to cart - $
      {(props.foodPrice * props.foodCounter).toFixed(2)}
    </button>
  );
}

export default AddToCart;
