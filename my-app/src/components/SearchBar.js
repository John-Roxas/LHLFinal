import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";
import axios from "axios";

function SearchBar() {
  const [restuarantSearch, setResturantSearch] = useState("");
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    setShowLoginPopup(true);
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    axios.post("/login", { username, password }).then((res) => {
      console.log("From app", res.data);
    });
    closeLoginPopup();
  };

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
        <div className="login-container">
          <button className="login-button" onClick={handleLoginClick}>
            Login
          </button>
          {showLoginPopup && (
            <>
              <div className="overlay" onClick={closeLoginPopup} />
              <div className="login-popup">
                <form className="login-form" onSubmit={handleLoginSubmit}>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <button type="submit">Submit</button>
                </form>
                <button className="close-button" onClick={closeLoginPopup}>
                  <FontAwesomeIcon icon={faRectangleXmark} />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
