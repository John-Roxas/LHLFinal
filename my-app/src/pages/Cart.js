import SearchBar from "../components/SearchBar";
import NavigationBar from "../components/NavigationBar";
import "../App.css";

function Cart() {
  return (
    <div className="App">
      <SearchBar />
      <h2 className="cart-container">My Cart</h2>
      <NavigationBar />
    </div>
  );
}

export default Cart;
