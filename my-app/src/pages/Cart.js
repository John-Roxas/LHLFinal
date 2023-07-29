// import SearchBar from "../components/SearchBar";
import NavigationBar from "../components/NavigationBar";
import ShoppingCart from "../components/Cart";
import CartList from "../components/CartList";
import "../App.css";

function Cart(props) {
  return (
    <div className="App">
      {/* <SearchBar /> */}

      <div className="cart-container">
        <ShoppingCart cart={props.cart}/>
      </div>

      {/* <h2 className="cart-container">My Cart</h2> */}
      {/* <CartList cart={props.cart} /> */}
      <NavigationBar />
    </div>
  );
}

export default Cart;
