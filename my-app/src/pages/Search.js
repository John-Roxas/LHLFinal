import SearchBar from "../components/SearchBar";
import SearchMode from "../components/SearchMode"
import NavigationBar from "../components/NavigationBar";
import RestaurantList from "../components/RestaurantList";
import { useState, useEffect } from 'react'
import axios from 'axios'

function Index(props) {
  const [search, setSearch] = useState("");
  const [mode, setMode] = useState("restaurant");
  const [state, setState] = useState({
    restaurant: [],
    foodList: []
  })

  useEffect(() => {
    axios.get(`http://localhost:8080/api/search?mode=${mode}&term=${search}`)
    .then((response) => {
      setState((prev) => ({
        ...prev,
        restaurant: response.data,
      }));
    });
  }, [search])

  return (
    <div className="App">
      <SearchBar 
        search={search}
        setSearch={setSearch}
      />
      <SearchMode setMode={setMode}/>
      Debug use: Mode {mode} Search: {search}
      <RestaurantList restaurant={state.restaurant} />
      <NavigationBar />
    </div>
  );
}

export default Index;
