import SearchBar from "../components/SearchBar";
import NavigationBar from "../components/NavigationBar";
import RestaurantList from "../components/RestaurantList";

function Index() {
  return (
    <div className="App">
      <SearchBar />
      <RestaurantList />
      <NavigationBar />
    </div>
  );
}

export default Index;
