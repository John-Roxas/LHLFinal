import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faHouse,
  faMagnifyingGlass,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import "./NavigationBar.css";

function NavigationBar() {
  return (
    <div className="nav-bar">
      <Link to="/">
        <button className="nav-button">
          <FontAwesomeIcon icon={faHouse} />
        </button>
      </Link>
      <Link to="/search">
        <button className="nav-button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </Link>
      <Link to="/cart">
        <button className="nav-button">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </Link>
      <Link to="/profile">
        <button className="nav-button">
          <FontAwesomeIcon icon={faUser} />
        </button>
      </Link>
    </div>
  );
}

export default NavigationBar;
