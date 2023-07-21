import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <NavigationBar />
    </div>
  );
}

export default App;
