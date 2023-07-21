import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

function SearchBar() {
  const [restuarantSearch, setResturantSearch] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  const eventHandler = (e) => {
    setResturantSearch(e.target.value);
  };

  return (
    <div className="SearchBox">
      <form className="form-field" onSubmit={onFormSubmit}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          className="SearchBar"
          name="restuarantSearch"
          type="text"
          placeholder="Food, restuarant, drinks, etc."
          value={restuarantSearch}
          onChange={eventHandler}
        />
      </form>
    </div>
  );
}

export default SearchBar;
