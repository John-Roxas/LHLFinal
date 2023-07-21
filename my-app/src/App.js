import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import NavigationBar from "./components/NavigationBar";
import Restaurants from "./components/RetaurantTile";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Restaurants />
      <NavigationBar />
    </div>
  );
}

export default App;
