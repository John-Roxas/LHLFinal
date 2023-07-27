import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";
import Login from "./Login";

function SearchBar() {
  const [restuarantSearch, setResturantSearch] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  const eventHandler = (event) => {
    setResturantSearch(event.target.value);
  };

  return (
    <div>
      <div className="search-container">
        <form className="form-field" onSubmit={onFormSubmit}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            className="search-bar"
            name="restuarantSearch"
            type="text"
            placeholder="Food, restaurant, drinks, etc."
            value={restuarantSearch}
            onChange={eventHandler}
          />
        </form>
        <Login />
      </div>
    </div>
  );
}

export default SearchBar;
