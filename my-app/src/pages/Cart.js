// import SearchBar from "../components/SearchBar";
import NavigationBar from "../components/NavigationBar";
import ShoppingCart from "../components/Cart";
import "../App.css";

function Cart() {
  return (
    <div className="App">
      {/* <SearchBar /> */}

      <div className="cart-container">
        <ShoppingCart />
      </div>

      <NavigationBar />
    </div>
  );
}

export default Cart;
