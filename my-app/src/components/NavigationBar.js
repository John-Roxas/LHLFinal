import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <button className="NavButton">
        <FontAwesomeIcon icon={faHouse} />
      </button>
      <button className="NavButton">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <button className="NavButton">
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
      <button className="NavButton">
        <FontAwesomeIcon icon={faUser} />
      </button>
    </div>
  );
}

export default NavigationBar;
