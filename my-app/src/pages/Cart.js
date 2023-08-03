import NavigationBar from "../components/NavigationBar";
import ShoppingCart from "../components/Cart";
import CartList from "../components/CartList";
import "../App.css";

function Cart(props) {
  return (
    <div className="App">
      <div className="cart-container">
        <ShoppingCart cart={props.cart} customerInfo={props.customerInfo}/>
      </div>
      <NavigationBar />
    </div>
  );
}

export default Cart;
