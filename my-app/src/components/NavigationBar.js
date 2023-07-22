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
    <div className="NavBar">
      <Link to="/">
        <button className="NavButton">
          <FontAwesomeIcon icon={faHouse} />
        </button>
      </Link>
      <Link>
        <button className="NavButton">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </Link>
      <Link to="/cart">
        <button className="NavButton">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </Link>
      <Link to="/profile">
        <button className="NavButton">
          <FontAwesomeIcon icon={faUser} />
        </button>
      </Link>
    </div>
  );
}

export default NavigationBar;
