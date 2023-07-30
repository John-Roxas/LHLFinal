import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./SearchField.css";
import Login from "./Login";

function SearchField(props) {
  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-field">
      <form className="form-field" onSubmit={onFormSubmit}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          className="search-bar"
          name="restuarantSearch"
          type="text"
          placeholder="Food, restaurant, drinks, etc."
          value={props.search}
          onChange={(e) => {
            props.setSearch(e.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default SearchField;
