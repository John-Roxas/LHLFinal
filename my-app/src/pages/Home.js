import SearchField from "../components/SearchField";
import NavigationBar from "../components/NavigationBar";
import RestaurantList from "../components/RestaurantList";
import Login from "../components/Login";

function Index(props) {
  const { loginState, setLoginState, handleLoginClick, handleLoginSubmit } =
    props;

  return (
    <div className="App">
      {/* Need to confirm with denny if the href can be handled in the formfield instead of the whole search bar since my login needs to be there */}
      <div className="search-container">
        <a href="/search" className="form-field">
          <SearchField />
        </a>
        <Login />
      </div>
      <RestaurantList restaurants={props.restaurants} foods={props.foods} />
      <NavigationBar />
    </div>
  );
}

export default Index;
