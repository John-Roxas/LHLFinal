import SearchBar from "../components/SearchBar";
import NavigationBar from "../components/NavigationBar";
import RestaurantList from "../components/RestaurantList";

function Index(props) {
  return (
    <div className="App">
      <a href="/search">
        <SearchBar />
      </a>
      <RestaurantList restaurant={props.restaurant} />
      <NavigationBar />
    </div>
  );
}

export default Index;
