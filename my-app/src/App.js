import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import NavigationBar from "./components/NavigationBar";
import RestaurantList from "./components/RestaurantList";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <RestaurantList />
      <NavigationBar />
    </div>
  );
}

export default App;
