import SearchBar from "../components/SearchBar";
import SearchMode from "../components/SearchMode";
import NavigationBar from "../components/NavigationBar";
import RestaurantList from "../components/RestaurantList";
import { useState, useEffect } from "react";
import axios from "axios";

function Search(props) {
  // Default hook for search page
  const [state, setState] = useState({
    search: "",
    mode: "restaurant",
    restaurants: [],
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
          restaurants: response.data,
        }));
      });
  }, [state.search, state.mode]);

  return (
    <div className="App">
      {/* <SearchBar 
        search={state.search}
        setSearch={setSearch}
      /> */}
      {`${props.API_ROOT}?mode=${state.mode}&term=${state.search}`}
      <SearchMode setMode={setMode} />
      {/* <RestaurantList restaurant={state.restaurants} /> */}
      <NavigationBar />
    </div>
  );
}

export default Search;
