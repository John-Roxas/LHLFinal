// import SearchBar from "../components/SearchBar";
import NavigationBar from "../components/NavigationBar";
import CartList from "../components/CartList";
import "../App.css";

function Cart(props) {
  return (
    <div className="App">
      {/* <h2 className="cart-container">My Cart</h2> */}
      <CartList cart={props.cart} />
      <NavigationBar />
    </div>
  );
}

export default Cart;
