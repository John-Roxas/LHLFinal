import SearchField from "../components/SearchField";
import SearchMode from "../components/SearchMode";
import NavigationBar from "../components/NavigationBar";
import RestaurantList from "../components/RestaurantList";
import FoodList from "../components/FoodList";
import { useState, useEffect } from "react";
import axios from "axios";

function Search(props) {
  // Default hook for search page
  const [state, setState] = useState({
    search: "",
    mode: "restaurant",
    results: [],
  });

  // Define setters for search and search mode
  const setSearch = (search) => setState({ ...state, search });
  const setMode = (mode) => setState({ ...state, mode });
  
  // Monitor changes in query
  useEffect(() => {
    axios
      .get(`${props.API_ROOT}?mode=${state.mode}&term=${state.search}`)
      .then((response) => {
        setState((prev) => ({
          ...prev,
          results: response.data,
        }));
      });
  }, [state.search, state.mode]);

  if(state.mode === "name") {
    return (
      <div className="App">
        <div className="search-container">
          <SearchField search={state.search} setSearch={setSearch} />
        </div>
        <div className="search-padding"></div>
        <SearchMode setMode={setMode} />
        <FoodList
          foods={state.results}
        />
        <NavigationBar />
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="search-container">
          <SearchField search={state.search} setSearch={setSearch} />
        </div>
        <div className="search-padding"></div>
        <SearchMode setMode={setMode} />
        <RestaurantList restaurants={state.results} />
        <NavigationBar />
      </div>
    );
  }
}

export default Search;
