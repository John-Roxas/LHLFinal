import NavigationBar from "../components/NavigationBar";
import GeoMap from "../components/GeoMap";
import { useLocation, useNavigate } from "react-router-dom";
import "./Map.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Map(props) {
  const { customer_street_address, city, postal_code } = props.customerInfo;

  const customerAddress = `${customer_street_address} ${city}`;

  const history = useNavigate(); // this is used to go back to previous page

  // obtained from pages/Restaurant.js
  const location = useLocation();
  const { restaurantAddress, restaurantPostalCode } = location.state;

  return (
    <div>
      <button onClick={() => history(-1)} className="back-button">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="map-container">
        <h2>Map</h2>
        <p>
          Restaurant Address: {restaurantAddress} {restaurantPostalCode}
        </p>
        <p>
          Home Address: {customerAddress} {postal_code}
        </p>
        <GeoMap
          restaurantAddress={restaurantAddress}
          restaurantPostalCode={restaurantPostalCode}
          customerAddress={customerAddress}
          customerPostalCode={postal_code}
        />
      </div>
      <NavigationBar />
    </div>
  );
}

export default Map;
