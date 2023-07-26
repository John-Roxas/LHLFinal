import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

function SearchBar(props) {

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-container">
      <form className="form-field" onSubmit={onFormSubmit}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          className="search-bar"
          name="restuarantSearch"
          type="text"
          placeholder="Food, restaurant, drinks, etc."
          value={props.search}
          onChange={(e) => {props.setSearch(e.target.value)}}
        />
      </form>
    </div>
  );
}

export default SearchBar;
