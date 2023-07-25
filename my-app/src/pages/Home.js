import SearchBar from "../components/SearchBar";
import NavigationBar from "../components/NavigationBar";
import RestaurantList from "../components/RestaurantList";
import Login from "../components/LoginForm";

function Index(props) {
  return (
    <div className="App">
      <SearchBar />
      <RestaurantList restaurant={props.restaurant} />
      <NavigationBar />
    </div>
  );
}

export default Index;
