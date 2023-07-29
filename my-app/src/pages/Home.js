import SearchBar from "../components/SearchBar";
import NavigationBar from "../components/NavigationBar";
import RestaurantList from "../components/RestaurantList";

function Index(props) {
  return (
    <div className="App">
      <a href="/search">
        <SearchBar />
      </a>
      <RestaurantList restaurants={props.restaurants} foods={props.foods} />
      <NavigationBar />
    </div>
  );
}

export default Index;
